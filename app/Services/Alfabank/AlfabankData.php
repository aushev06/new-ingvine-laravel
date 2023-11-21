<?php

namespace App\Services\Alfabank;

use Spatie\LaravelData\Data;


class AlfabankData extends Data
{
    public array $jsonParams = [];

    public function __construct(
        public string $token,
        public string $orderNumber,
        public int    $amount,
        public string $returnUrl,
        public string $failUrl,
        public string $phone,
    )
    {
        $this->amount = $amount * 100;
//        $this->jsonParams = [
//            'phone' => $this->phone
//        ];
    }

    public function toArray(): array
    {
        $result = parent::toArray();

        unset($result['phone']);

        return $result;
    }
}
