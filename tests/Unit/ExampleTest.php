<?php

namespace Tests\Unit;

use App\Services\Food\FoodService;
use PHPUnit\Framework\TestCase;

class ExampleTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function test_that_true_is_true()
    {
        $this->assertTrue(true);

        $service = new FoodService();

    }
}
