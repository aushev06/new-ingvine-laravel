<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Order\models\OrderViewModel;
use App\Models\Order\Order;
use App\Repositories\Order\OrderRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class OrderController extends Controller
{
    public function index(OrderRepository $orderRepository)
    {
        return Order::query()->whereUserId(auth()->user()->id)->get()->map(static fn(Order $order) => new OrderViewModel($order, $orderRepository));
    }

    public function updateFusionPosOrderStatusWebhook(Request $request)
    {
        Log::info('DATA ORDER', ['order' => $request->toArray()]);
    }

}
