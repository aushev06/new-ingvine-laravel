<?php

namespace App\Services\Alfabank;

interface AlfabankServiceInterface
{
    public function createPayment(array $data): AlfabankResultData;
}
