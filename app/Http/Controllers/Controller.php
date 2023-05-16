<?php

namespace App\Http\Controllers;

use App\Models\Order\models\OrderViewModel;
use App\Models\Order\Order;
use App\Repositories\Order\OrderRepository;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Inertia\Inertia;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function profile(OrderRepository $orderRepository)
    {
        $resultOrders = [];

        $orders = Order::query()->whereUserId(auth()->user()->id)->get();


        foreach ($orders as $order) {
            $resultOrders[] = new OrderViewModel($order, $orderRepository);
        }


        return Inertia::render('Profile', ['orders' => $resultOrders]);

    }
}
