<?php

namespace Database\Seeders;

use App\Models\Serie;
use hmerritt\Imdb;
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
        $imdb = new Imdb();
        $seriesName = [
            "The Last Of Us",
            "Grey's Anatomy",
            "Breaking Bad - A Química do Mal",
            "Rick and Morty",
            "The Last Kingdom",
            "Doctor House",
            "Once Upon A Time",
            "The White Lotus",
            "Loki",
            "WandaVision",
            "Arrow",
            "Scandal",
            "Peaky Blinders",
            "Vikings",
            "Friends",
            "Brooklyn Nine-Nine",
            "Orange Is The New Black"
        ];
        foreach ($seriesName as $name) {
            try {
                $data = $imdb->search($name);
                $serieData = $imdb->film($data['titles'][0]['id']);
                $serie = new Serie([
                    'name' => $serieData['title'],
                    'image' => $data['titles'][0]['image'],
                    'plot' => $serieData['plot'],
                    'rate' => $serieData['rating']
                ]);
                $serie->save();
            } catch (\Exception $e) {
                throw $e;
            }
        }
    }
}
