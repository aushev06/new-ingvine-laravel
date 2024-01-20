<?php

namespace App\Http\Controllers;

use App\Http\Requests\Order\OrderRequest;
use App\Jobs\SendFusionPosOrderJob;
use App\Models\Order\models\OrderViewModel;
use App\Models\Order\Order;
use App\Repositories\Order\OrderRepository;
use App\Services\Integrations\CreateFusionPosRemoteOrder;
use App\Services\Integrations\FusionPosIntegrationService;
use App\Services\Order\OrderService;
use App\Services\Telegram\TelegramService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redirect;

class OrderController extends Controller
{

    /**
     * @var OrderService
     */
    private $orderService;

    public function __construct(OrderService $orderService)
    {
        $this->orderService = $orderService;
    }

    public function addOrder(OrderRequest $request, TelegramService $telegramService)
    {

        $order = $this->orderService->save($request);
        if ($order->pay_type == Order::TYPE_ONLINE) {
            $telegramService->sendToTelegram($order);
            return response()->json([
                'redirect_url' => $this->orderService->setValuesForPayment($order)
            ]);
        } else {
            $telegramService->sendToTelegram($order);
            SendFusionPosOrderJob::dispatch($order);
            session()->regenerate();
        }

        return response()->json($order);
    }

    public function webhook(Request $request)
    {
        Log::info("Информация об оплате", [$request->all('inv_id')]);
        /**
         * @var Order $order
         */
        $order         = Order::findOrFail((int)$request->post('InvId'));
        $order->status = Order::STATUS_PAID;
        $order->save();
    }
}
