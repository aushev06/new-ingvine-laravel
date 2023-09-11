<?php

namespace App\Services\Integrations;


use GuzzleHttp\Client;
use GuzzleHttp\ClientInterface;
use Psr\Http\Message\ResponseInterface;

class FusionPosIntegrationService implements IntegrationServiceInterface
{

    private string $baseUrl = 'https://ingvine-food3.fusionpos.ru/api/v1/';
    private ResponseInterface $response;
    public function __construct(private ClientInterface $client, private string $endpoint)
    {
    }

    public function getFoods(array $params): ResponseInterface
    {
        return $this->client->request('GET', $this->baseUrl . $this->endpoint, $params);
    }

    public function getTotalPage(): int
    {
        // TODO: Implement getTotalPage() method.
    }
}
