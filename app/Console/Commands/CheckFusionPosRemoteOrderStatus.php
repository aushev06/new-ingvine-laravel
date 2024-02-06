<?php

namespace App\Console\Commands;

use App\Models\Order\Order;
use App\Services\Integrations\FusionPosIntegrationService;
use App\Services\Order\OrderService;
use Illuminate\Console\Command;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Log;
use Symfony\Component\Console\Command\Command as CommandAlias;

class CheckFusionPosRemoteOrderStatus extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'fusionpos:check-remote-order-status';

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
        // Получаем текущую дату и время
        $now = Carbon::now();

        // Вычисляем дату и время, предшествующие последним 10 часам
        $tenHoursAgo = $now->subHours(24);

        /**
         * @var Order[] $latestOrders
         */
        $latestOrders = Order::where('created_at', '>=', $tenHoursAgo)
            ->whereNotNull('sent_to_pos_at')
            ->get();

        /**
         * @var FusionPosIntegrationService $integrationService
         */
        $integrationService = app(FusionPosIntegrationService::class);
        $orderService = app(OrderService::class);
        foreach ($latestOrders as $order) {
            try {
                $remoteOrder = $integrationService
                    ->getRemoteOrder($order->id);
                $lastStatus = $order->pos_status;
                if ($remoteOrder->delivery_info->delivery_status === 'new') {
                    $order->pos_status = $remoteOrder->order_info->status;
                } else {
                    $order->pos_status = $remoteOrder->delivery_info->delivery_status;
                }

                if ($lastStatus !== $order->pos_status) {
                    if ($order->pos_status === 'accepted') {
                        $order->state = Order::STATE_ACCEPT;
                        $orderService->sendNotification('Заказ #' . $order->id, 'Ваш заказ принят', $order->notification_token, 'AAAAi3C1y_I:APA91bHkU1a-z51PRXQKpHqi2CUvGi1_a3fBZF9-c1CzeQvKtufAFLniiZKbQUupYQu2W7z33GsBugeRBdnJ7tTeuzDgom-E0bPbZo2KHOv7iieGLrKT5RgQbrwT8QyJIBvgpcW3A3tE');
                    } elseif ($order->pos_status === 'packed' && in_array($order->delivery_type, [Order::DELIVERY_TYPE_BOOKING, Order::DELIVERY_TYPE_PICKUP])) {
                        $order->state = Order::STATE_READY;
                        $orderService->sendNotification('Заказ #' . $order->id, 'Ваш заказ готов, можете забирать!', $order->notification_token, 'AAAAi3C1y_I:APA91bHkU1a-z51PRXQKpHqi2CUvGi1_a3fBZF9-c1CzeQvKtufAFLniiZKbQUupYQu2W7z33GsBugeRBdnJ7tTeuzDgom-E0bPbZo2KHOv7iieGLrKT5RgQbrwT8QyJIBvgpcW3A3tE');
                    } elseif ($order->pos_status === 'onway' && $order->delivery_type === Order::DELIVERY_TYPE_COURIER) {
                        $order->state = Order::STATE_WAS_SENT;
                        $orderService->sendNotification('Заказ #' . $order->id, 'Ваш заказ отправлен!', $order->notification_token, 'AAAAi3C1y_I:APA91bHkU1a-z51PRXQKpHqi2CUvGi1_a3fBZF9-c1CzeQvKtufAFLniiZKbQUupYQu2W7z33GsBugeRBdnJ7tTeuzDgom-E0bPbZo2KHOv7iieGLrKT5RgQbrwT8QyJIBvgpcW3A3tE');
                    }
                }


                $order->save();
            } catch (\Throwable $throwable) {
                Log::error($throwable->getMessage());
                Log::error($throwable->getTraceAsString());
            }
        }

        return CommandAlias::SUCCESS;
    }
}
