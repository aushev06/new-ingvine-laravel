<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Setting;
use App\Models\SiteSetting;
use App\Services\Tesham\TeshamService;

class TaxiController extends Controller
{

    private TeshamService $service;

    public function __construct()
    {
        $settings = SiteSetting::query()->whereIn('key', ['latitude', 'longitude'])
            ->get()
            ->keyBy('key')
            ->map(static fn($item) => $item->value)
            ->toArray();
        $this->service = new TeshamService(
            latitude: $settings['latitude'],
            longitude: $settings['longitude'],
            token: Setting::getSetting(Setting::SETTING_TESHAM_TOKEN)
        );
    }


    public function findAddresses()
    {
        return $this->service->findAddresses(request()->get('address', ''));
    }

    public function deliverySum()
    {
        return [
            'sum' => $this->service->getDeliverySum(
                request()->get('destination_latitude'),
                request()->get('destination_longitude'),
            )
        ];
    }
}
