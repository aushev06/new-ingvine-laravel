<?php

namespace App\Services\Sms;

use App\Models\Setting;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\ClientException;
use GuzzleHttp\Exception\GuzzleException;
use GuzzleHttp\Exception\RequestException;
use Illuminate\Support\Facades\Log;

class SmsAeroService implements SmsServiceInterface
{

    public function send(string $text, string $phone)
    {
        $settings = Setting::query()
            ->whereIn('key', ['SMS_AERO_LOGIN', 'SMS_AERO_TOKEN', 'SMS_AERO_SIGN'])
            ->get()
            ->keyBy('key')
            ->map(fn($item) => $item->value);

        if (empty($settings)) {
            return false;
        }

        $login = $settings['SMS_AERO_LOGIN'];
        $token = $settings['SMS_AERO_TOKEN'];
        $sign = $settings['SMS_AERO_SIGN'];

        $url = 'https://' . $login . ':' . $token . '@gate.smsaero.ru/v2/sms/send?number=' . $phone . '&text=' . $text . '&sign=' . $sign;

        $client = new Client();

        try {
            $response = $client->get($url);
            return json_decode($response->getBody()->getContents(), true);
        } catch (RequestException $exception) {
            Log::error($exception->getMessage());
            Log::error($exception->getTraceAsString());
            $response = $exception->getResponse();
            return json_decode($response->getBody()->getContents(), true);
        }
    }
}
