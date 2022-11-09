<?php

namespace Tests\Feature\Auth;

use App\Models\Category\Category;
use App\Models\Food\Food;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class AuthenticationTest extends TestCase
{
    use RefreshDatabase;


    public function test_users_can_authenticate_using_the_login_screen()
    {
        Storage::fake('foods');
        $user = User::where('role', User::ROLE_ADMIN)->first();
        dd($user);

        $this
            ->actingAs($user)
            ->post('/admin/food', [
                'category_id' => Category::query()->first()->id,
                'status' => Food::STATUS_ACTIVE,
                'description' => 'Lorem ipsum',
                'FoodInfo' => [
                    'weight' => 1,
                    'carbohydrates' => 1,
                    'protein' => 1,
                    'fat' => 1,
                    'calories' => 1,
                ],
                'img' => UploadedFile::fake()->image('avatar.jpg')
            ])
            ->dumpHeaders()
            ->dump()
            ->dd();
    }
}
