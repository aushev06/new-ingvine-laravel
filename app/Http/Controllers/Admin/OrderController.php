<?php

namespace App\Http\Controllers\Admin;

use App\Filters\OrderFilter;
use App\Models\Order\models\OrderViewModel;
use App\Models\Order\Order;
use App\Models\Setting;
use App\Models\SiteSetting;
use App\Repositories\Order\OrderRepository;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Inertia\Inertia;

class OrderController extends Controller
{
    const ROUTE_INDEX = 'order.index';
    const ROUTE_CREATE = 'order.create';
    const ROUTE_SHOW = 'order.show';
    const ROUTE_STORE = 'order.store';
    const ROUTE_UPDATE = 'order.update';
    const ROUTE_EDIT = 'order.edit';
    const ROUTE_DESTROY = 'order.destroy';

    const TITLE = 'Заказы';
    /**
     * @var OrderRepository
     */
    private $orderRepository;

    public function __construct(OrderRepository $orderRepository)
    {
        $this->orderRepository = $orderRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, OrderFilter $orderFilter)
    {
        /**
         * @var Order[] $orders
         */
        $orders = $this->orderRepository->get()->filter($orderFilter)->orderBy(Order::ATTR_ID, 'desc')->paginate(15);
        return view('admin.order.index', compact('orders'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $order = Order::findOrFail($id);
        $model = new OrderViewModel($order, $this->orderRepository);

        return view('admin.order.show', compact('model'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $order = Order::findOrFail($id);
        $model = new OrderViewModel($order, $this->orderRepository);

        return view('admin.order.edit', compact('model'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->orderRepository->update($request->all(), $id);

        return redirect()->route(static::ROUTE_SHOW, $id);
    }

    public function setStatus(int $id, string $status)
    {
        $order = Order::query()->findOrFail($id);
        $order->state = $status;
        $order->save();

        if ($status === Order::STATE_WAS_SENT) {
            $this->sendNotification('Заказ #' . $id, 'Ваш заказ отправлен', 'ddRtj3NQGUe6o3pBERKiDZ:APA91bHsU3caAQYtfd12fwH1vwFjweZm1tYmzXmtn4Z8RoQLB38ikJSukfRJ5bzh3w4AvlXIbMktAkSgRXqC_3Vd9SSVWxhuTbYB4BE9IMiaqQ_LrD7J1IheLG5p_6xBlDtT8QTLNBcv', 'AAAAi3C1y_I:APA91bHkU1a-z51PRXQKpHqi2CUvGi1_a3fBZF9-c1CzeQvKtufAFLniiZKbQUupYQu2W7z33GsBugeRBdnJ7tTeuzDgom-E0bPbZo2KHOv7iieGLrKT5RgQbrwT8QyJIBvgpcW3A3tE');
        }

        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $this->orderRepository->destroy($id);

        return redirect()->route('admin.index');
    }

    public function taxi($id)
    {
        $order = Order::findOrFail($id);
        $model = new OrderViewModel($order, $this->orderRepository);

        return Inertia::render('Taxi', [
            'model' => $model,
            'settings' => SiteSetting::query()->get()->keyBy('key')->map(fn($item) => $item->value)
        ]);
    }

    public function sendNotification($title, $body, $deviceToken, $serverKey)
    {
        $client = new Client();

        $data = [
            'notification' => [
                'title' => $title,
                'body' => $body,
            ],
            'to' => $deviceToken,
        ];

        $headers = [
            'Authorization' => 'key=' . $serverKey,
            'Content-Type' => 'application/json',
        ];

        try {
            $response = $client->post('https://fcm.googleapis.com/fcm/send', [
                'headers' => $headers,
                'json' => $data,
            ]);

            $statusCode = $response->getStatusCode();
            if ($statusCode === 200) {
                echo 'Уведомление успешно отправлено.';
            } else {
                echo 'Не удалось отправить уведомление. Код ответа сервера: ' . $statusCode;
            }
        } catch (\Exception $e) {
            echo 'Ошибка при отправке уведомления: ' . $e->getMessage();
        }
    }
}
