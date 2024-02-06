<?php

namespace App\Services\Integrations;

use Spatie\LaravelData\Data;

class RemoteOrderInfoDto extends Data
{
    /**
     * "order_info": {
     * "id_order": 36752,
     * "id_order_remote_source": 328,
     * "status": "accepted",
     * "id_user_handle": 7,
     * "date_handle": "2024-02-03 22:47:21",
     * "date_delivered": "2024-02-03 22:46:54"
     * }
     */
    public function __construct(
        public int     $id_order,
        public string  $status,
        public ?string $date_handle,
    )
    {
    }
}
