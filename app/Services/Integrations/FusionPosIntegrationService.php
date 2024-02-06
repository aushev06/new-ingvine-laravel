<?php

namespace App\Services\Integrations;


use App\Models\Pos;
use GuzzleHttp\ClientInterface;
use GuzzleHttp\Exception\GuzzleException;
use GuzzleHttp\Exception\RequestException;
use Illuminate\Support\Facades\Log;
use Psr\Http\Message\ResponseInterface;

class FusionPosIntegrationService implements IntegrationServiceInterface
{

    public function __construct(private ClientInterface $client)
    {
    }

    public function getFoods(array $params): ResponseInterface
    {
        return $this->client->request('GET', '/api/v1/menu', $params);
    }

    public function getTotalPage(): int
    {
        // TODO: Implement getTotalPage() method.
    }

    public function createRemoteOrder(array $data): ResponseInterface
    {
        return $this->client->post('/api/v2/remote-orders', [
            'json' => $data
        ]);
    }

    public function getRemoteOrder(int $orderId): RemoteOrderDto
    {
        $result = $this->client->request('GET', '/api/v2/remote-orders/' . $orderId);
        return RemoteOrderDto::from(json_decode($result->getBody()->getContents(), true));
    }

    public function updateMenu(int $menuId, array $data): bool
    {
        try {
            $this->client
                ->request('PUT', '/api/v1/menu/' . $menuId, $data);
            return true;
        } catch (\Throwable $exception) {
            Log::error($exception->getMessage());
            Log::error($exception->getTraceAsString());
            return false;
        }
    }

    public function importFoods(): bool
    {
        $ids = [];
        $service = $this;
        $data = $service->getFoods(['query' => ['page' => 1, 'filter' => json_encode(['is_deleted' => 'no'])],]);
        $response = json_decode($data->getBody()->getContents(), true);
        $items = $response['data']['items'];

        foreach ($items as $item) {
            Pos::query()->updateOrInsert(['mitm_id' => $item['id']], [
                'mitm_name' => $item['name'],
                'mitm_id' => $item['id'],
                'price' => $item['price'],
            ]);
            echo "[IMPORTED]: " . $item['id'] . "\n\n";
            $ids[] = $item['id'];
        }

        $total = $response['data']['_meta']['totalCount'];

        for ($i = 2; $i <= $total; $i++) {
            $data = $service->getFoods(['query' => ['page' => $i, 'filter' => json_encode(['is_deleted' => 'no'])],]);
            $response = json_decode($data->getBody()->getContents(), true);
            $items = $response['data']['items'];

            foreach ($items as $item) {
                Pos::query()->updateOrInsert(['mitm_id' => $item['id']], [
                    'mitm_name' => $item['name'],
                    'mitm_id' => $item['id'],
                    'price' => $item['price'],
                ]);
                echo "[IMPORTED]: " . $item['id'] . "\n\n";
                $ids[] = $item['id'];
            }
        }

        Pos::query()->where('mitm_id', 'NOT IN', $ids)->delete();
        echo 'SUCCESS';
        return true;
    }
}
