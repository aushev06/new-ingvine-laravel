<?php

namespace App\Services\Integrations;


use GuzzleHttp\ClientInterface;
use Psr\Http\Message\ResponseFactoryInterface;
use Psr\Http\Message\ResponseInterface;

interface IntegrationServiceInterface
{
    public function getFoods(array $params);

    public function getTotalPage(): int;

    public function updateMenu(int $menuId, array $data): bool;

    public function createRemoteOrder(array $data): ResponseInterface;

    public function importFoods(): bool;
}
