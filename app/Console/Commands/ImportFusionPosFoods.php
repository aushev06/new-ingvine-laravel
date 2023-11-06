<?php

namespace App\Console\Commands;

use App\Models\Pos;
use App\Services\Integrations\ClientInterface;
use App\Services\Integrations\FusionPosIntegrationService;
use GuzzleHttp\Client;
use Illuminate\Console\Command;

class ImportFusionPosFoods extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'fusionpos:get-foods';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        /**
         * @var FusionPosIntegrationService $service
         */
        $service = app(FusionPosIntegrationService::class);
        $data = $service->getFoods(['query' => ['page' => 1, 'filter' => json_encode(['is_deleted' => 'no'])],]);
        $response = json_decode($data->getBody()->getContents(), true);
        $items = $response['data']['items'];

        foreach ($items as $item) {
            Pos::query()->updateOrInsert(['mitm_id' => $item['id']],[
                'mitm_name' => $item['name'],
                'mitm_id' => $item['id'],
                'price' => $item['price'],
            ]);
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
            }
        }

    }
}
