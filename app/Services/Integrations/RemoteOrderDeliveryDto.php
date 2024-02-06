<?php

namespace App\Services\Integrations;

use Spatie\LaravelData\Data;

class RemoteOrderDeliveryDto extends Data
{
    /**
     * "id_order": 36750,
     * "client_fullname": "Аушев Ибрагим",
     * "client_phone": "+79780438740",
     * "delivery_date": "2024-02-02 21:00:33.000000",
     * "dlv_fullname2": null,
     * "dlv_phone2": null,
     * "dlv_address": "Магас|||",
     * "dlv_comment": "",
     * "id_executor": null,
     * "delivery_status": "packed",
     * "delivery_method": "onstore",
     * "order_budget": "0.00",
     * "id_delivery_service": null,
     * "cost": null,
     * "id_user_deliver": null
     */
    public function __construct(
        public int         $id_order,
        public string      $client_fullname,
        public string      $client_phone,
        public string      $delivery_date,
        public string|null $dlv_fullname2,
        public string|null $dlv_phone2,
        public string      $dlv_address,
        public string      $dlv_comment,
        public string      $delivery_status,
        public string      $delivery_method,
    )
    {
    }
}
