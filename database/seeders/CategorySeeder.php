<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        collect([
            'Casual Sneakers',
            'Running Shoes',
            'Slip-On Shoes',

        ])->each(function ($category) {
            \App\Models\Category::query()->create([
                'name' => $category,
                'slug' => str($category)->slug(),
            ]);
        });
    }
}
