<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;

/**
 * Class Setting
 * @property string $key
 * @package App\Models
 * @author Aushev Ibra <aushevibra@yandex.ru>
 */
class Setting extends Model
{
    const ATTR_KEY = 'key';
    const ATTR_VALUE = 'value';

    const SETTING_TILLYPAD_TOKEN = 'TILLYPAD_TOKEN';
    const SETTING_DEMO_MRH_LOGIN = 'DEMO_MRH_LOGIN';
    const SETTING_DEMO_MRH_PASSWORD = 'DEMO_MRH_PASSWORD';
    const SETTING_DEMO_MRH_PASSWORD2 = 'DEMO_MRH_PASSWORD2';
    const SETTING_MRH_LOGIN = 'MRH_LOGIN';
    const SETTING_MRH_PASSWORD = 'MRH_PASSWORD';
    const SETTING_MRH_PASSWORD2 = 'MRH_PASSWORD2';
    const SETTING_TELEGRAM_BOT_ID = 'TELEGRAM_BOT_ID';
    const SETTING_TELEGRAM_CHAT_ID = 'TELEGRAM_CHAT_ID';
    const SETTING_TWILIO_SID = 'TWILIO_SID';
    const SETTING_TWILIO_TOKEN = 'TWILIO_TOKEN';
    const SETTING_TWILIO_PHONE = 'TWILIO_PHONE';
    const SETTING_SMSPILOT_PHONE = 'SMSPILOT_PHONE';
    const SETTING_SMSPILOT_APIKEY = 'SMSPILOT_APIKEY';

    const SETTING_PHONE_SERVICE_STATUS = 'PHONE_SERVICE_STATUS';

    const SETTING_FUSION_POS_URL = 'FUSION_POS_URL';
    const SETTING_FUSION_POS_TOKEN = 'FUSION_POS_TOKEN';
    const SETTING_ALFABANK_USERNAME = 'ALFABANK_USERNAME';
    const SETTING_ALFABANK_PASSWORD = 'ALFABANK_PASSWORD';
    const SETTING_ALFABANK_RETURN_URL = 'ALFABANK_RETURN_URL';
    const SETTING_ALFABANK_FAIL_URL = 'ALFABANK_FAIL_URL';
    const SETTING_ALFABANK_API_URL = 'ALFABANK_API_URL';
    const SETTING_ALFABANK_API_TOKEN = 'ALFABANK_API_TOKEN';

    const SETTING_TESHAM_TOKEN = 'TESHAM_TOKEN';

    protected $primaryKey = 'key';

    protected $casts = [
        'key' => 'string'
    ];

    protected $fillable = [
        'key',
        'value'
    ];

    public static function getSetting(string $key)
    {
        $settings = self::getSettings();

        if (isset($settings[$key]['value'])) {
            return $settings[$key]['value'];
        }

        return '';
    }

    public static function initSettings()
    {
        self::getSettings();
    }

    private static function getSettings()
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
