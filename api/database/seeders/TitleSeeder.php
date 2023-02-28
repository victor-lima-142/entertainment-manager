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
                'type' => 'series',
                'genres' => [
                    'Drama',
                    'Suspense',
                    'Horror'
                ]
            ],
            "Grey's Anatomy" => [
                'type' => 'series',
                'genres' => [
                    'Drama',
                    'Thriller',
                    'Romance'
                ]
            ],
            "Breaking Bad" => [
                'type' => 'series',
                'genres' => [
                    'Drama',
                    'Thriller'
                ]
            ],
            "Rick and Morty" => [
                'type' => 'series',
                'genres' => [
                    'Comedy',
                    'Adventure',
                    'Action',
                ]
            ],
            "The Last Kingdom" => [
                'type' => 'series',
                'genres' => [
                    'Medieval',
                    'Action',
                    'Adventure',
                    'Historical'
                ]
            ],
            "Doctor House" => [
                'type' => 'series',
                'genres' => [
                    'Drama',
                    'Romance',
                    'Thriller'
                ]
            ],
            "Once Upon A Time" => [
                'type' => 'series',
                'genres' => [
                    'Adventure',
                    'Suspense',
                    'Drama',
                    'Medieval'
                ]
            ],
            "The White Lotus" => [
                'type' => 'series',
                'genres' => [
                    'Drama',
                    'Comedy'
                ]
            ],
            "Loki" => [
                'type' => 'series',
                'genres' => [
                    'Sci Fi',
                    'Science Fiction',
                    'Mistery',
                    'Fantasy',
                    'Adventure',
                ]
            ],
            "WandaVision" => [
                'type' => 'series',
                'genres' => [
                    'Sci Fi',
                    'Science Fiction',
                    'Mistery',
                    'Fantasy',
                    'Adventure',
                ]
            ],
            "Arrow" => [
                'type' => 'series',
                'genres' => [
                    'Sci Fi',
                    'Science Fiction',
                    'Mistery',
                    'Fantasy',
                    'Adventure',
                ]
            ],
            "Scandal" => [
                'type' => 'series',
                'genres' => [
                    'Drama',
                    'Comedy',
                    'Romance',
                    'Thriller',
                ]
            ],
            "Peaky Blinders" => [
                'type' => 'series',
                'genres' => [
                    'Action',
                    'Drama',
                    'Suspense',
                    'Historical'
                ]
            ],
            "Vikings" => [
                'type' => 'series',
                'genres' => [
                    'Action',
                    'Drama',
                    'Suspense',
                    'Historical',
                    'Medieval'
                ]
            ],
            "Friends" => [
                'type' => 'series',
                'genres' => [
                    'Comedy',
                    'Romance',
                    'Drama'
                ]
            ],
            "Brooklyn Nine-Nine" => [
                'type' => 'series',
                'genres' => [
                    'Comedy',
                    'Romance',
                    'Action'
                ]
            ],
            "Orange Is The New Black" => [
                'type' => 'series',
                'genres' => [
                    'Drama',
                    'Comedy',
                    'Romance',
                    'Thriller'
                ]
            ],
            "Jurassic Park" => [
                'type' => 'movies',
                'genres' => [
                    'Adventure',
                    'Action',
                    'Suspense',
                    'Fantasy'
                ]
            ],
            "The Godfather" => [
                'type' => 'movies',
                'genres' => [
                    'Action',
                    'Drama',
                    'Historical'
                ]
            ],
            "King Richard" => [
                'type' => 'movies',
                'genres' => [
                    'Drama',
                    'Thriller'
                ]
            ],
            "Dune" => [
                'type' => 'movies',
                'genres' => [
                    'Action',
                    'Adventure',
                    'Fantasy',
                    'Science Fiction',
                    'Sci Fi',
                ]
            ],
            "Black Adam" => [
                'type' => 'movies',
                'genres' => [
                    'Action',
                    'Heroes',
                    'Science Fiction',
                    'Adventure'
                ]
            ],
            "The Batman" => [
                'type' => 'movies',
                'genres' => [
                    'Action',
                    'Heroes',
                    'Science Fiction',
                    'Adventure',
                    'Suspense'
                ]
            ],
            "Star Wars" => [
                'type' => 'movies',
                'genres' => [
                    'Action',
                    'Adventure',
                    'Fantasy',
                    'Science Fiction',
                    'Sci Fi',
                ]
            ],
            "Harry Potter" => [
                'type' => 'movies',
                'genres' => [
                    'Action',
                    'Adventure',
                    'Fantasy',
                    'Science Fiction',
                ]
            ],
            "Pirates of the caribbean" => [
                'type' => 'movies',
                'genres' => [
                    'Action',
                    'Adventure',
                    'Fantasy',
                    'Science Fiction',
                ]
            ],
            "High School Musical" => [
                'type' => 'movies',
                'genres' => [
                    'Drama',
                    'Comedy',
                    'Musical',
                    'Romance',
                ]
            ],
            "Ben 10" => [
                'type' => 'series',
                'genres' => [
                    'Action',
                    'Adventure',
                    'Comedy',
                    'Science Fiction',
                ]
            ],
            "Uncharted" => [
                'type' => 'games',
                'genres' => [
                    'Action',
                    'Adventure'
                ]
            ],
            "Grand Theft Auto" => [
                'type' => 'games',
                'genres' => [
                    'Action',
                    'Adventure',
                    'Thriller'
                ]
            ],
            "GTA" => [
                'type' => 'games',
                'genres' => [
                    'Action',
                    'Adventure',
                    'Thriller'
                ]
            ],
            "Assassin's Creed" => [
                'type' => 'games',
                'genres' => [
                    'Action',
                    'Adventure',
                    'Thriller',
                    'Historical',
                    'Medieval'
                ]
            ],
            "Call Of Duty" => [
                'type' => 'games',
                'genres' => [
                    'Action',
                    'Adventure',
                    'Drama',
                    'Historical'
                ]
            ],
            "Pro Evolution Soccer" => [
                'type' => 'games',
                'genres' => [
                    'Action',
                    'Sport',
                ]
            ],
            "Pay Day" => [
                'type' => 'games',
                'genres' => [
                    'Action',
                    'Adventure',
                    'Thriller'
                ]
            ],
            "Far Cry" => [
                'type' => 'games',
                'genres' => [
                    'Action',
                    'Adventure',
                    'Thriller',
                    'Historical',
                ]
            ],
            "League Of Legends" => [
                'type' => 'games',
                'genres' => [
                    'Action',
                    'Adventure'
                ]
            ],
            "Batman Arkham" => [
                'type' => 'games',
                'genres' => [
                    'Action',
                    'Heroes',
                    'Science Fiction',
                    'Adventure',
                    'Suspense'
                ]
            ],
            "Battlefield" => [
                'type' => 'games',
                'genres' => [
                    'Action',
                    'Adventure',
                    'Drama',
                    'Historical'
                ]
            ],
            "NBA 2k" => [
                'type' => 'games',
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