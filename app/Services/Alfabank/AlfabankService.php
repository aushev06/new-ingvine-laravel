<?php

namespace App\Services\Alfabank;

use App\Models\Setting;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\GuzzleException;
use Illuminate\Support\Facades\Log;

class AlfabankService implements AlfabankServiceInterface
{
    private string $url = 'https://alfa.rbsuat.com/payment/rest/register.do';

    public function createPayment(array $data): AlfabankResultData
    {
        $client = new Client();
        try {
            $response = $client->post(Setting::getSetting(Setting::SETTING_ALFABANK_API_URL), [
                'query' => $data
            ]);
            $result = json_decode($response->getBody()->getContents(), true);
            return new AlfabankResultData($result);
        } catch (GuzzleException $throwable) {
            Log::error($throwable->getMessage());
            Log::error($throwable->getTraceAsString());
            throw new \Exception('Не удалось создать платеж');
        }
    }
}
