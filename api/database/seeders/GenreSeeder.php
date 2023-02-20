<?php

namespace Database\Seeders;

use App\Models\Genre;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class GenreSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $genres = [
            'Action',
            'Adventure',
            'Comedy',
            'Drama',
            'Fantasy',
            'Horror',
            'Suspense',
            'Mistery',
            'Romance',
            'Thriller',
            'Musical',
            'Science Fiction',
            'Western',
            'Sci Fi',
            'Medieval'
        ];

        foreach ($genres as $genre) {
            $genre = new Genre([
                'name' => $genre,
                'rate' => null
            ]);
            $genre->saveOrFail();
        }
    }
}
