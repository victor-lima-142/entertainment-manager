<?php

namespace Database\Seeders;

use App\Models\Genre;
use App\Models\GenreTitle;
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
        $titles = [
            "The Last Of Us" => [
                'type' => 'serie',
                'genres' => [
                    'Drama',
                    'Suspense',
                    'Horror'
                ]
            ],
            "Grey's Anatomy" => [
                'type' => 'serie',
                'genres' => [
                    'Drama',
                    'Thriller',
                    'Romance'
                ]
            ],
            "Breaking Bad" => [
                'type' => 'serie',
                'genres' => [
                    'Drama',
                    'Thriller'
                ]
            ],
            "Rick and Morty" => [
                'type' => 'serie',
                'genres' => [
                    'Comedy',
                    'Adventure',
                    'Action',
                ]
            ],
            "The Last Kingdom" => [
                'type' => 'serie',
                'genres' => [
                    'Medieval',
                    'Action',
                    'Adventure',
                    'Historical'
                ]
            ],
            "Doctor House" => [
                'type' => 'serie',
                'genres' => [
                    'Drama',
                    'Romance',
                    'Thriller'
                ]
            ],
            "Once Upon A Time" => [
                'type' => 'serie',
                'genres' => [
                    'Adventure',
                    'Suspense',
                    'Drama',
                    'Medieval'
                ]
            ],
            "The White Lotus" => [
                'type' => 'serie',
                'genres' => [
                    'Drama',
                    'Comedy'
                ]
            ],
            "Loki" => [
                'type' => 'serie',
                'genres' => [
                    'Sci Fi',
                    'Science Fiction',
                    'Mistery',
                    'Fantasy',
                    'Adventure',
                ]
            ],
            "WandaVision" => [
                'type' => 'serie',
                'genres' => [
                    'Sci Fi',
                    'Science Fiction',
                    'Mistery',
                    'Fantasy',
                    'Adventure',
                ]
            ],
            "Arrow" => [
                'type' => 'serie',
                'genres' => [
                    'Sci Fi',
                    'Science Fiction',
                    'Mistery',
                    'Fantasy',
                    'Adventure',
                ]
            ],
            "Scandal" => [
                'type' => 'serie',
                'genres' => [
                    'Drama',
                    'Comedy',
                    'Romance',
                    'Thriller',
                ]
            ],
            "Peaky Blinders" => [
                'type' => 'serie',
                'genres' => [
                    'Action',
                    'Drama',
                    'Suspense',
                    'Historical'
                ]
            ],
            "Vikings" => [
                'type' => 'serie',
                'genres' => [
                    'Action',
                    'Drama',
                    'Suspense',
                    'Historical',
                    'Medieval'
                ]
            ],
            "Friends" => [
                'type' => 'serie',
                'genres' => [
                    'Comedy',
                    'Romance',
                    'Drama'
                ]
            ],
            "Brooklyn Nine-Nine" => [
                'type' => 'serie',
                'genres' => [
                    'Comedy',
                    'Romance',
                    'Action'
                ]
            ],
            "Orange Is The New Black" => [
                'type' => 'serie',
                'genres' => [
                    'Drama',
                    'Comedy',
                    'Romance',
                    'Thriller'
                ]
            ],
            "Jurassic Park" => [
                'type' => 'movie',
                'genres' => [
                    'Adventure',
                    'Action',
                    'Suspense',
                    'Fantasy'
                ]
            ],
            "The Godfather" => [
                'type' => 'movie',
                'genres' => [
                    'Action',
                    'Drama',
                    'Historical'
                ]
            ],
            "King Richard" => [
                'type' => 'movie',
                'genres' => [
                    'Drama',
                    'Thriller'
                ]
            ],
            "Dune" => [
                'type' => 'movie',
                'genres' => [
                    'Action',
                    'Adventure',
                    'Fantasy',
                    'Science Fiction',
                    'Sci Fi',
                ]
            ],
            "Black Adam" => [
                'type' => 'movie',
                'genres' => [
                    'Action',
                    'Heroes',
                    'Science Fiction',
                    'Adventure'
                ]
            ],
            "The Batman" => [
                'type' => 'movie',
                'genres' => [
                    'Action',
                    'Heroes',
                    'Science Fiction',
                    'Adventure',
                    'Suspense'
                ]
            ],
            "Star Wars" => [
                'type' => 'movie',
                'genres' => [
                    'Action',
                    'Adventure',
                    'Fantasy',
                    'Science Fiction',
                    'Sci Fi',
                ]
            ],
            "Harry Potter" => [
                'type' => 'movie',
                'genres' => [
                    'Action',
                    'Adventure',
                    'Fantasy',
                    'Science Fiction',
                ]
            ],
            "Pirates of the caribbean" => [
                'type' => 'movie',
                'genres' => [
                    'Action',
                    'Adventure',
                    'Fantasy',
                    'Science Fiction',
                ]
            ],
            "High School Musical" => [
                'type' => 'movie',
                'genres' => [
                    'Drama',
                    'Comedy',
                    'Musical',
                    'Romance',
                ]
            ],
            "Ben 10" => [
                'type' => 'serie',
                'genres' => [
                    'Action',
                    'Adventure',
                    'Comedy',
                    'Science Fiction',
                ]
            ],
            "Uncharted" => [
                'type' => 'game',
                'genres' => [
                    'Action',
                    'Adventure'
                ]
            ],
            "Grand Theft Auto" => [
                'type' => 'game',
                'genres' => [
                    'Action',
                    'Adventure',
                    'Thriller'
                ]
            ],
            "GTA" => [
                'type' => 'game',
                'genres' => [
                    'Action',
                    'Adventure',
                    'Thriller'
                ]
            ],
            "Assassin's Creed" => [
                'type' => 'game',
                'genres' => [
                    'Action',
                    'Adventure',
                    'Thriller',
                    'Historical',
                    'Medieval'
                ]
            ],
            "Call Of Duty" => [
                'type' => 'game',
                'genres' => [
                    'Action',
                    'Adventure',
                    'Drama',
                    'Historical'
                ]
            ],
            "Pro Evolution Soccer" => [
                'type' => 'game',
                'genres' => [
                    'Action',
                    'Sport',
                ]
            ],
            "Pay Day" => [
                'type' => 'game',
                'genres' => [
                    'Action',
                    'Adventure',
                    'Thriller'
                ]
            ],
            "Far Cry" => [
                'type' => 'game',
                'genres' => [
                    'Action',
                    'Adventure',
                    'Thriller',
                    'Historical',
                ]
            ],
            "League Of Legends" => [
                'type' => 'game',
                'genres' => [
                    'Action',
                    'Adventure'
                ]
            ],
            "Batman Arkham" => [
                'type' => 'game',
                'genres' => [
                    'Action',
                    'Heroes',
                    'Science Fiction',
                    'Adventure',
                    'Suspense'
                ]
            ],
            "Battlefield" => [
                'type' => 'game',
                'genres' => [
                    'Action',
                    'Adventure',
                    'Drama',
                    'Historical'
                ]
            ],
            "NBA 2k" => [
                'type' => 'game',
                'genres' => [
                    'Adventure'
                ]
            ],
        ];
        foreach ($titles as $name => $titleD) {
            try {
                $type = $titleD['type'];
                $genres = $titleD['genres'];
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
                    foreach ($genres as $genre) {
                        $gn = Genre::where('name', '=', $genre)->first();
                        if ($gn) {
                            $join = new GenreTitle([
                                'genre_id' => $gn->id,
                                'title_id' => $newTitle->id,
                            ]);
                            $join->save();
                        }
                    }
                }
            } catch (\Exception $e) {
                throw $e;
            }
        }
    }
}