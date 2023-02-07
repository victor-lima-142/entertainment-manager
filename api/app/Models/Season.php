<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Season extends Model
{
    protected $primaryKey = 'id';

    protected $fillable = [
        'number',
        'name',
        'serie_id'
    ];

    protected $foreignKey = ['serie_id'];

    protected $dates = [
        'deleted_at',
        'created_at',
        'updated_at'
    ];

    public function serie()
    {
        return $this->belongsTo('Serie', 'serie_id');
    }

    public function episode()
    {
        return $this->hasMany('Episode', 'season_id');
    }
}