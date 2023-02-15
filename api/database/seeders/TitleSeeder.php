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
            "The Last Of Us" => 'serie',
            "Grey's Anatomy" => 'serie',
            "Breaking Bad" => 'serie',
            "Rick and Morty" => 'serie',
            "The Last Kingdom" => 'serie',
            "Doctor House" => 'serie',
            "Once Upon A Time" => 'serie',
            "The White Lotus" => 'serie',
            "Loki" => 'serie',
            "WandaVision" => 'serie',
            "Arrow" => 'serie',
            "Scandal" => 'serie',
            "Peaky Blinders" => 'serie',
            "Vikings" => 'serie',
            "Friends" => 'serie',
            "Brooklyn Nine-Nine" => 'serie',
            "Orange Is The New Black" => 'serie',
            "Jurassic Park" => 'movie',
            "The Godfather" => 'movie',
            "King Richard" => 'movie',
            "Dune" => 'movie',
            "Black Adam" => 'movie',
            "The Batman" => 'movie',
            "Star Wars" => 'movie',
            "Harry Potter" => 'movie',
            "Pirates of the caribbean" => 'movie',
            "High School Musical" => 'movie',
            "Ben 10" => 'serie',
            "Uncharted" => 'game',
            "Grand Theft Auto" => 'game',
            "GTA" => 'game',
            "Assassin's Creed" => 'game',
            "Call Of Duty" => 'game',
            "Pro Evolution Soccer" => 'game',
            "Pay Day" => 'game',
            "Far Cry" => 'game',
            "League Of Legends" => 'game',
            "Batman Arkham" => 'game',
            "Battlefield" => 'game',
            "NBA 2k" => 'game',
            "Scooby Doo" => 'serie',
        ];
        foreach ($seriesName as $name => $type) {
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
                        'rate' => $titleData['rating'] ? $titleData['rating'] : 7,
                        'type' => $type
                    ]);
                    $newTitle->save();
                }
                
                
            } catch (\Exception $e) {
                throw $e;
            }
        }
    }
}
