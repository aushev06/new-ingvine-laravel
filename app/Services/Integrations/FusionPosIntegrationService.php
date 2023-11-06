<?php

namespace App\Services\Integrations;


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
        try {
            return $this->client->post('/api/v2/remote-orders', [
                'json' => $data
            ]);
        } catch (RequestException $exception) {
            dd($exception);
        }
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
}
