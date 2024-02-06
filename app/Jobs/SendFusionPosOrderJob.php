<?php

namespace App\Jobs;

use App\Models\Order\models\OrderViewModel;
use App\Models\Order\Order;
use App\Repositories\Order\OrderRepository;
use App\Services\Integrations\CreateFusionPosRemoteOrder;
use App\Services\Integrations\FusionPosIntegrationService;
use App\Services\Telegram\TelegramService;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;

class SendFusionPosOrderJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(public Order $order)
    {
        //
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $orderRepository = new OrderRepository(new Order());
        try {
            $model = new OrderViewModel($this->order, $orderRepository);
            $data = CreateFusionPosRemoteOrder::fromModel($model);

            /**
             * @var FusionPosIntegrationService $integrationService
             */
            $integrationService = app(FusionPosIntegrationService::class);
            $integrationService->createRemoteOrder($data->toArray());
            Order::query()->where('id', $model->id)->update(['sent_to_pos_at' => date('Y-m-d H:i:s')]);
        } catch (\Throwable $exception) {
            Log::error($exception->getMessage());
            Log::error($exception->getTraceAsString());
            $telegramService = new TelegramService();
            $telegramService->sendError('Не удалось отправить заказа ' . $this->order->id . ' в FUSION POS');
        }
    }
}
