<?php

namespace App\Observers;

use App\Models\Order\Order;
use App\Repositories\Order\OrderRepository;
use App\Services\Telegram\TelegramService;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

class OrderObserver
{

    public function __construct()
    {
    }

    /**
     * Handle the order "created" event.
     *
     * @param \App\Models\Order\Order $order
     * @return void
     */
    public function created(Order $order)
    {

    }

    /**
     * Handle the order "updated" event.
     *
     * @param \App\Models\Order\Order $order
     * @return void
     */
    public function updated(Order $order)
    {

    }

    /**
     * Handle the order "deleted" event.
     *
     * @param \App\Models\Order\Order $order
     * @return void
     */
    public function deleted(Order $order)
    {
        //
    }

    /**
     * Handle the order "restored" event.
     *
     * @param \App\Models\Order\Order $order
     * @return void
     */
    public function restored(Order $order)
    {
        //
    }

    /**
     * Handle the order "force deleted" event.
     *
     * @param \App\Models\Order\Order $order
     * @return void
     */
    public function forceDeleted(Order $order)
    {
        //
    }
}
