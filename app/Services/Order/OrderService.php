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
use App\Repositories\Coupon\CouponRepository;
use App\Repositories\Order\OrderRepository;
use App\Services\Coupon\CouponService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Redirect;
use Idma\Robokassa\Payment;

class OrderService
{
    public function __construct(public OrderRepository $orderRepository, public CouponService $couponService)
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
                Order::ATTR_ADDRESS
            ]);

            $total = $cart->total;


            if ($request->post('coupon')) {
                $coupon = Coupon::query()->where('coupon', '=', $request->post('coupon'))->first();
                $cart->assignCoupon($coupon->id);
                $total = $this->couponService->checkCoupon($coupon)['resultSum'];
                $cart->total = $total;
                $cart->save();
            }


            $attributes['cart_id'] = $cart->id;
            $attributes['total'] = $total;

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
//        $payment = $this->payment;
//        $payment->setInvoiceId($order->id);
//        $payment->setSum($order->total);
//        $payment->setDescription("Оплата заказа");

        return '';
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


}
