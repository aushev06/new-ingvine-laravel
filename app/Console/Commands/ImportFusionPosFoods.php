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
        $service->importFoods();
    }
}
