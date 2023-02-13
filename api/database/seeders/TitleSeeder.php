<?php

namespace Database\Seeders;

use App\Models\Title;
use hmerritt\Imdb;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TitleSeeder extends Seeder
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
            "Breaking Bad",
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
            "Orange Is The New Black",
            "Jurassic Park",
            "Star Wars",
            "Harry Potter",
            "Pirates of the caribbean",
            "High School Musical",
        ];
        foreach ($seriesName as $name) {
            try {
                $data = $imdb->search($name);
                $titles = $data['titles'];
                foreach ($titles as $title) {
                    $id = $title['id'];
                    $titleData = $imdb->film($id);
                    $newTitle = new Title([
                        'name' => $titleData['title'],
                        'image' => $titleData['poster'],
                        'plot' => $titleData['plot'],
                        'rate' => $titleData['rating'] ? $titleData['rating'] : 7
                    ]);
                    $newTitle->save();
                }
                
                
            } catch (\Exception $e) {
                throw $e;
            }
        }
    }
}
