<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Episode extends Model
{
    protected $primaryKey = 'id';

    protected $fillable = [
        'number',
        'season_id',
        'serie_id'
    ];

    protected $foreignKey = ['season_id'];

    protected $dates = [
        'deleted_at',
        'created_at',
        'updated_at'
    ];

    public function season()
    {
        return $this->belongsTo('Season', 'season_id');
    }
}
