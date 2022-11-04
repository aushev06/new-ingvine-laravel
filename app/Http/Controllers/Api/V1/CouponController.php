<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Coupon\Coupon;
use App\Services\Coupon\CouponService;
use Illuminate\Http\Request;

class CouponController extends Controller
{

    public function __construct(private CouponService $service)
    {
    }


    public function checkCoupon(string $coupon)
    {
        return $this->service->checkCoupon(Coupon::query()->where('coupon', $coupon)->firstOrFail());
    }

}
