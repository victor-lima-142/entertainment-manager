<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

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

    public function genderTitle()
    {
        return $this->belongsTo('GenderTitle', 'title_id');
    }

    static public function getSerie(int|array $id = null)
    {
        if ($id === null) {
            return Title::where('type', '=', 'serie')->get();
        } else {
            $ids = gettype($id) === 'int' ? [$id] : $id;
            return Title::where('type', '=', 'serie')->whereIn('id', $ids)->get();
        }
    }

    static public function getGame(int|array $id = null)
    {
        if ($id === null) {
            return Title::where('type', '=', 'game')->get();
        } else {
            $ids = gettype($id) === 'int' ? [$id] : $id;
            return Title::where('type', '=', 'game')->whereIn('id', $ids)->get();
        }
    }

    static public function getMovie(int|array $id = null)
    {
        if ($id === null) {
            return Title::where('type', '=', 'movie')->get();
        } else {
            $ids = gettype($id) === 'int' ? [$id] : $id;
            return Title::where('type', '=', 'movie')->whereIn('id', $ids)->get();
        }
    }
}