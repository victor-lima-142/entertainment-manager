<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GenreTitle extends Model
{
    protected $primaryKey = 'id';

    protected $fillable = [
        'genre_id',
        'title_id'
    ];

    protected $foreignKey = ['genre_id', 'title_id'];

    protected $dates = [
        'deleted_at',
        'created_at',
        'updated_at'
    ];

    public function genre()
    {
        return $this->hasOne('Genre', 'genre_id');
    }

    public function title()
    {
        return $this->hasOne('Title', 'title_id');
    }
}
