<?php

namespace App\Services\Sms;

interface SmsServiceInterface
{
    public function send(string $text, string $phone);
}
