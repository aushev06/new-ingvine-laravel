<?php

namespace App\Providers;

use App\Models\Ingridient\Ingridient;
use App\Models\Ingridient\IngridientFoods;
use App\Models\Order\Order;
use App\Models\Setting;
use App\Observers\IngridientFoodsObserver;
use App\Observers\IngridientObserver;
use App\Observers\OrderObserver;
use App\Services\Alfabank\AlfabankService;
use App\Services\Alfabank\AlfabankServiceInterface;
use App\Services\Sms\SmsAeroService;
use App\Services\Sms\SmsServiceInterface;
use GuzzleHttp\Client;
use GuzzleHttp\ClientInterface;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(SmsServiceInterface::class, SmsAeroService::class);
        $this->app->bind(AlfabankServiceInterface::class, AlfabankService::class);
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Setting::initSettings();;

        Order::observe(OrderObserver::class);
        IngridientFoods::observe(IngridientFoodsObserver::class);
        Ingridient::observe(IngridientObserver::class);
        $this->app->instance(ClientInterface::class, new Client([
            'base_uri' => Setting::getSetting(Setting::SETTING_FUSION_POS_URL),
            'headers' => [
                'Accept' => 'application/json',
                'Authorization' => 'Bearer ' . Setting::getSetting(Setting::SETTING_FUSION_POS_TOKEN),
            ],
        ]));
    }


}
