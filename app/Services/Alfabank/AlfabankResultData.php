<?php

namespace App\Services\Alfabank;

use Spatie\LaravelData\Data;

class AlfabankResultData
{
    public function __construct(public array $result)
    {
    }

    public function isSuccess()
    {
        return empty($this->result['errorCode']);
    }

    public function getErrorMessage()
    {
        if ($this->isSuccess()) {
            return '';
        }

        return $this->result['errorMessage'];
    }

    public function getFormUrl(): string
    {
        if (!$this->isSuccess()) {
            return '';
        }

        return $this->result['formUrl'];
    }

    public function getOrderUUID(): string
    {
        if (!$this->isSuccess()) {
            return '';
        }

        return $this->result['orderId'];
    }
}
