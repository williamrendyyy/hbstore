<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        \App\Models\User::factory()->create([
            'name' => 'admin',
            'email' => 'admin@test.com',
            'password' => bcrypt('admin123')
        ]);

        $this->call([
            CategorySeeder::class,
            ProductSeeder::class,
            VariationSeeder::class,
            PermissionSeeder::class,
            ProvinceSeeder::class,
            CitySeeder::class,
            CourierSeeder::class,
        ]);

        \App\Models\User::factory(10)->create();
    }
}
