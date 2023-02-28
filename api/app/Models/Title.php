<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
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

    static public function getLikeds(Request $request)
    {
        $liked = Like::where('user_id', $request->user)->get();
        $titles = Title::all();
        $genres = Genre::all();
        $genreTitles = GenreTitle::all();

        $genreAux = $result = [];

        foreach ($liked as $likedTitle) {
            foreach ($genreTitles as $genreTitle) {
                foreach ($titles as $title) {
                    if ($likedTitle->title_id === $title->id && $genreTitle->id === $likedTitle->title_id) {
                        $result[$title->id] = $title;
                        $result[$title->id]['genres'][] = $genre->name;
                        foreach ($genres as $genre) {
                            if ($genre->id === $genreTitle->genre_id) {
                                $genreAux[$genreTitle->title_id] = $genre->name;
                            }
                        }
                    }
                }
                
            }
            
        }
        
        if ($request->genre) {
            $result = array_filter($result, function ($title) use ($request) {
                return in_array($request->genre, $title['genres']);
            });
        }
        if ($request->id) {
            $result = array_filter($result, function ($title) use ($request) {
                return $title->id == $request->id;
            });
        }
        return $result;
    }
}