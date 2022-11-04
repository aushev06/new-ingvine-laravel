<?php

namespace App\Services\Coupon;


use App\Models\Cart\Cart;
use App\Models\Coupon\Coupon;
use App\Repositories\Cart\CartRepository;
use App\Repositories\Coupon\CouponRepository;
use JetBrains\PhpStorm\ArrayShape;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

class CouponService
{
    public function __construct(private CouponRepository $couponRepository, private CartRepository $cartRepository)
    {
    }

    #[ArrayShape(['resultSum' => "mixed"])] public function checkCoupon(Coupon $coupon): array
    {
        if (!$this->couponRepository->couponCheck($coupon)) {
            throw new BadRequestHttpException('Данный купон не действителен');
        }

        /**
         * @var Cart $cart
         */
        $cart = $this->cartRepository->getCart();

        return [
            'resultSum' => $coupon->type == $coupon::TYPE_PERCENT ? $cart->total - ($cart->total * $coupon->value / 100) : $cart->total - $coupon->value
        ];
    }
}
