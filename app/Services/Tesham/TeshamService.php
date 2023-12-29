<?php

namespace App\Services\Tesham;

use GuzzleHttp\Client;

class TeshamService
{
    const BASE_URL = 'https://websites.platform.taximaster.ru';

    private $client;

    public function __construct(private string $latitude, private string $longitude, private string $token)
    {
        $this->client = new Client([
            'base_uri' => self::BASE_URL,
            'headers' => [
                "Sec-Fetch-Dest" => "empty",
                "Sec-Fetch-Mod" => "cors",
                "Sec-Fetch-Site" => "same-origin",
                "X-Site-VtmId" => "134",
                "X-Site-VtmGroupId" => "56",
                "Accept" => "*/*"
            ]
        ]);
    }

    public function findAddresses(string $address)
    {
        try {
            $response = $this->client->get('/v2/find_address?needle=' . $address);
            return json_decode($response->getBody()->getContents());

        } catch (\Throwable $throwable) {
            return [];
        }
    }

    public function getDeliverySum(string $destination_latitude, string $destination_longitude)
    {
        try {
            $data = [
                'source_lat' => $this->latitude,
                'source_lon' => $this->longitude,
                'destination_lat' => $destination_latitude,
                'destination_lon' => $destination_longitude,
                'source_time_iso8601' => date('Y-m-d')
            ];

            $response = $this->client->post('/v2/calc_order_cost', [
                'form_params' => $data,
            ]);

            return (int) explode(' ', str_replace('"', '', $response->getBody()->getContents()))[0];

        } catch (\Throwable $throwable) {
            return 0;
        }
    }
}
