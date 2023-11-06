<?php

namespace App\Services\Integrations;

use App\Models\Cart\CartProperty;
use App\Models\Cart\models\CartPropertyViewModel;
use App\Models\Order\models\OrderViewModel;
use Spatie\LaravelData\Data;

class CreateFusionPosRemoteOrder extends Data
{
    public function __construct(
        public int     $id_point,
        public string  $delivery_method,
        public string  $originalOrderId,
        public int     $id_order_remote_source,
        public string  $client_fullname,
        public string  $client_phone,
        public string  $delivery_date,
        public string  $delivery_comment = '',
        public ?string $city = null,
        public ?string $street = null,
        public ?string $house = null,
        public array   $items = [],
    )
    {
    }

    public static function fromModel(OrderViewModel $model): self
    {
        return new self(
            id_point: 1,
            delivery_method: $model->delivery_type === OrderViewModel::DELIVERY_TYPE_COURIER ? 'delivery' : 'onstore',
            originalOrderId: uniqid(),
            id_order_remote_source: $model->id,
            client_fullname: $model->name,
            client_phone: $model->phone,
            delivery_date: date('Y-m-d H:i:s', strtotime($model->date_delivery)),
            delivery_comment: $model->comment ?? '',
            city: $model->city,
            street: $model->street,
            house: $model->house ?? $model->home,
            items: array_map(
                static fn(CartPropertyViewModel $property) => ['qty' => $property->quantity, 'menu_id' => $property->mitm_id, 'menu_price' => $property->price],
                $model->foodProperties
            )
        );
    }
}

//{
//    "delivery_method": "delivery",
//    "id_point": 1,
//    "originalOrderId": "12312312_21313ffewfff123",
//    "id_order_remote_source": 1,
//    "client_fullname": "Aushhev Ibra",
//    "client_phone": "89780439840",
//    "delivery_date": "2023-11-01 11:12:22",
//    "city": "Magas",
//    "street": "ewfwef",
//    "house": 1,
//    "items": [
//        {
//            "menu_id": 1,
//            "qty": 1,
//            "menu_price": 1
//        }
//    ]
//}
