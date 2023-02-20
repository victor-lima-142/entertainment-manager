<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Genre extends Model
{
    protected $primaryKey = 'id';

    protected $fillable = [
        'name',
        'rate'
    ];

    protected $dates = [
        'deleted_at',
        'created_at',
        'updated_at'
    ];

    public function genreTitle()
    {
        return $this->belongsTo('GenreTitle', 'genre_id');
    }
}
