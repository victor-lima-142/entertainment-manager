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
}