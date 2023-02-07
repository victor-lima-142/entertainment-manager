<?php

namespace Database\Seeders;

use App\Models\Serie;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SerieSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $series = [
            "The Last Of Us" => "2023-01-15 00:00:00",
            "Grey's Anatomy" => "2005-03-27 00:00:00",
            "Breaking Bad - A Química do Mal" => "2013-09-29 00:00:00",
            "Rick and Morty" => "2013-12-02 00:00:00",
            "The Last Kingdom" => "2015-10-10 00:00:00"
        ];
        foreach ($series as $name => $release) {
            try {
                $serie = new Serie([
                    'name' => $name,
                    'release' => $release
                ]);
                $serie->save();
            } catch (\Exception $e) {
                throw $e;
            }
        }
    }
}
