<?php

namespace App\Http\Controllers;

use App\Http\Requests\Order\OrderRequest;
use App\Models\Order\models\OrderViewModel;
use App\Models\Order\Order;
use App\Repositories\Order\OrderRepository;
use App\Services\Integrations\CreateFusionPosRemoteOrder;
use App\Services\Integrations\FusionPosIntegrationService;
use App\Services\Order\OrderService;
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

    public function addOrder(OrderRequest $request, OrderRepository $orderRepository)
    {

        $order = $this->orderService->save($request);

        try {
            $model = new OrderViewModel($order, $orderRepository);
            $data = CreateFusionPosRemoteOrder::fromModel($model);

            /**
             * @var FusionPosIntegrationService $integrationService
             */
            $integrationService = app(FusionPosIntegrationService::class);
            $integrationService->createRemoteOrder($data->toArray());
        } catch (\Throwable $exception) {
            Log::error($exception->getMessage());
            Log::error($exception->getTraceAsString());
        }

        if ($order->pay_type == Order::TYPE_ONLINE) {
            return response()->json([
                'redirect_url' => $this->orderService->setValuesForPayment($order)
            ]);
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
