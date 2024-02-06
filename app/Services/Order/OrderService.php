<?php
/**
 * Created by PhpStorm.
 * User: aushev
 * Date: 15.09.2019
 * Time: 17:44
 */

namespace App\Services\Order;


use App\Http\Requests\Order\OrderRequest;
use App\Models\Cart\Cart;
use App\Models\Coupon\Coupon;
use App\Models\Order\Order;
use App\Models\Payment;
use App\Models\Setting;
use App\Models\SiteSetting;
use App\Repositories\Coupon\CouponRepository;
use App\Repositories\Order\OrderRepository;
use App\Services\Alfabank\AlfabankData;
use App\Services\Alfabank\AlfabankServiceInterface;
use App\Services\Coupon\CouponService;
use App\Services\Tesham\TeshamService;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Redirect;

class OrderService
{
    public function __construct(public OrderRepository $orderRepository, public CouponService $couponService, public AlfabankServiceInterface $alfabankService)
    {
        $this->orderRepository = $orderRepository;
//        $this->payment         = app()->make('Payment');
    }

    /**
     * @param OrderRequest $request
     * @return Order
     * @throws \Exception
     */
    public function save(OrderRequest $request)
    {
        try {
            /**
             * @var Cart $cart
             */
            $cart = Cart::where(Cart::ATTR_SESSION, $request->get(Cart::SESSION_KEY))->first();
            $attributes = $request->all([
                Order::ATTR_NAME,
                Order::ATTR_PHONE,
                Order::ATTR_COMMENT,
                Order::ATTR_PAY_TYPE,
                Order::ATTR_DELIVERY_TYPE,
                Order::ATTR_CITY,
                Order::ATTR_STREET,
                Order::ATTR_HOUSE,
                Order::ATTR_APARTMENT,
                Order::ATTR_ENTRANCE,
                Order::ATTR_INTERCOM,
                Order::ATTR_BUILDING,
                Order::ATTR_USER_ID,
                Order::ATTR_DELIVERY_COST,
                Order::ATTR_ADDRESS,
                Order::ATTR_NOTIFICATION_TOKEN,
            ]);

            $attributes['is_mobile'] = strlen($cart->session) > 160 ? 1 : 0;

            $total = $cart->total;


            if ($request->post('coupon')) {
                $coupon = Coupon::query()->where('coupon', '=', $request->post('coupon'))->first();
                $cart->assignCoupon($coupon->id);
                $total = $this->couponService->checkCoupon($coupon)['resultSum'];
                $cart->total = $total;
                $cart->save();
            }

            if ($request->delivery_type === Order::DELIVERY_TYPE_COURIER && $request->destination_longitude && $request->destination_latitude) {
                $settings = SiteSetting::query()->whereIn('key', ['latitude', 'longitude'])
                    ->get()
                    ->keyBy('key')
                    ->map(static fn($item) => $item->value)
                    ->toArray();
                $teshamService = new TeshamService(
                    latitude: $settings['latitude'],
                    longitude: $settings['longitude'],
                    token: Setting::getSetting(Setting::SETTING_TESHAM_TOKEN)
                );
                $total += $teshamService->getDeliverySum($request->destination_latitude, $request->destination_longitude);
            }

            $attributes['cart_id'] = $cart->id;
            $attributes['total'] = $total;

            if (!$attributes['city'] ?? null)  {
                $street = $attributes[Order::ATTR_STREET];
                $explodeStreet = explode('(', $street);
                $street = end($explodeStreet);
                $street = str_replace(')', '', $street);

                $attributes['city'] = $street;
            }

            $order = $this->orderRepository->store($attributes);
            //$cart->status = Cart::STATUS_INACTIVE;

            //$cart->delete();
            return $order;
        } catch (\Throwable $exception) {
            throw new \Exception($exception->getMessage());
        }
    }

    /**
     * Возвращает URL для редиректа на страницу оплаты
     *
     * @param Order $order
     * @return string
     * @throws \Idma\Robokassa\Exception\EmptyDescriptionException
     * @throws \Idma\Robokassa\Exception\InvalidInvoiceIdException
     * @throws \Idma\Robokassa\Exception\InvalidSumException
     */
    public function setValuesForPayment(Order $order)
    {
        $data = new AlfabankData(
            token: Setting::getSetting(Setting::SETTING_ALFABANK_API_TOKEN),
            orderNumber: $order->id,
            amount: (int) $order->total,
            returnUrl: Setting::getSetting(Setting::SETTING_ALFABANK_RETURN_URL),
            failUrl: Setting::getSetting(Setting::SETTING_ALFABANK_FAIL_URL),
            phone: $order->phone
        );

        $result = $this->alfabankService->createPayment($data->toArray());

        $payment = new Payment();
        $payment->username = '';
        $payment->password = '';
        $payment->order_number = $data->orderNumber;
        $payment->amount = $order->total;
        $payment->phone = $data->phone;
        $payment->form_url = $result->getFormUrl();
        $payment->uuid = $result->getOrderUUID();
        $payment->error_message = $result->getErrorMessage();
        $payment->save();

//        $payment = $this->payment;
//        $payment->setInvoiceId($order->id);
//        $payment->setSum($order->total);
//        $payment->setDescription("Оплата заказа");

        return $result->getFormUrl();
    }


    public function setSuccessTypeOrder(Request $request)
    {
        $this->payment->validateResult($request->all());

        /**
         * @var Order $order
         */
        $order = Order::findOrFail((int)$this->payment->getInvoiceId());

        $order->status = $order::STATUS_PAID;
        $order->save();

        return $order;
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
