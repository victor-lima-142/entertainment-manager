<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Title extends Model
{
    protected $primaryKey = 'id';

    protected $fillable = [
        'name',
        'release',
        'rate',
        'image',
        'plot',
        'type',
        'evaluators'
    ];

    protected $dates = [
        'deleted_at',
        'created_at',
        'updated_at'
    ];

    public function season()
    {
        return $this->hasMany('Season', 'serie_id');
    }

    public function like()
    {
        return $this->belongsTo('Like', 'title_id');
    }

    public function genreTitle()
    {
        return $this->belongsTo('GenreTitle', 'title_id');
    }


    static public function getWithWhere(int|array $id = null, string $type = null)
    {
        $titles = DB::table('titles')
            ->join('genre_titles', 'genre_titles.title_id', '=', 'titles.id')
            ->join('genres', 'genres.id', '=', 'genre_titles.genre_id')
            ->select(['titles.id as title_id', 'titles.name as title_name', 'titles.image', 'titles.plot', 'titles.rate as title_rate', 'titles.type', 'genres.name as genre_name', 'genres.rate as genre_rate']);

        if ($id === null) {
            if ($type) {
                $response = $titles->where('type', '=', $type)->get();
            }
            $response = $titles->get();
        } else {
            $ids = gettype($id) === 'int' ? [$id] : $id;
            if ($type) {
                $response = $titles->where('type', '=', $type)->whereIn('id', $ids)->get();
            }
            $response = $titles->whereIn('id', $ids)->get();
        }

        $dados = [];
        $genresOfTitle = [];
        foreach ($response as $value) {
            $id = $value->title_id;
            $genresOfTitle[$id] = [];
            $dados[$id] = [];
        }
        foreach ($response as $data) {
            $id = $data->title_id;
            array_push($genresOfTitle[$id], $data->genre_name);
            $dados[$id] = [];
            $dado = [
                'name' => $data->title_name,
                'id' => $data->title_id,
                'image' => $data->image,
                'plot' => $data->plot,
                'rate' => $data->title_rate,
                'genres' => $genresOfTitle[$id]
            ];
            array_push($dados[$id], $dado);
        }
        $response2 = [];

        foreach ($dados as $dado) {
            array_push($response2, $dado[0]);
        }

        return $response2;
    }
}