<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::firstOrcreate([
            User::ATTR_EMAIL => '89780438740',
            User::ATTR_PHONE => '89780438740',
            User::ATTR_PASSWORD => Hash::make('11111111'),
            User::ATTR_NAME => 'Admin',
            User::ATTR_ROLE => User::ROLE_ADMIN,

        ]);
    }
}
