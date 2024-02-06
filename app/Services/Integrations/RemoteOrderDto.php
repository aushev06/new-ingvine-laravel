<?php

namespace App\Services\Integrations;

use Spatie\LaravelData\Data;

class RemoteOrderDto extends Data
{
    public function __construct(
        public RemoteOrderDeliveryDto $delivery_info,
        public RemoteOrderInfoDto     $order_info,
    )
    {
    }

    public function createFromArray(array $data)
    {

    }
}
