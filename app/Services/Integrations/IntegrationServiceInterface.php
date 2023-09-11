<?php

namespace App\Services\Integrations;


use GuzzleHttp\ClientInterface;
use Psr\Http\Message\ResponseFactoryInterface;

interface IntegrationServiceInterface
{
    public function getFoods(array $params);

    public function getTotalPage(): int;
}
