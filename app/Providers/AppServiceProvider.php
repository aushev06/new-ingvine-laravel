<?php

namespace App\Providers;

use App\Models\Ingridient\Ingridient;
use App\Models\Ingridient\IngridientFoods;
use App\Models\Order\Order;
use App\Models\Setting;
use App\Observers\IngridientFoodsObserver;
use App\Observers\IngridientObserver;
use App\Observers\OrderObserver;
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
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        $settings = $this->getSettings();
        Order::observe(OrderObserver::class);
        IngridientFoods::observe(IngridientFoodsObserver::class);
        Ingridient::observe(IngridientObserver::class);
        $this->app->instance(ClientInterface::class, new Client([
            'base_uri' => $settings[Setting::SETTING_FUSION_POS_URL]['value'],
            'headers' => [
                'Accept' => 'application/json',
                'Authorization' => 'Bearer ' . $settings[Setting::SETTING_FUSION_POS_TOKEN]['value'],
            ],
        ]));
    }

    private function getSettings()
    {
        try {
            return Cache::rememberForever('settings', function () {
                return Setting::query()->select([Setting::ATTR_KEY, Setting::ATTR_VALUE])->get()->keyBy(
                    Setting::ATTR_KEY
                )->toArray();
            });
        } catch (\Throwable $exception) {
            return [];
        }
    }
}
