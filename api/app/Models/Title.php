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
        'evaluators'
    ];

    protected $dates = [
        'deleted_at',
        'created_at',
        'updated_at'
    ];

    public function season() {
        return $this->hasMany('Season', 'serie_id');
    }

    public function like() {
        return $this->belongsTo('Like', 'title_id');
    }

    public function genderTitle() {
        return $this->belongsTo('GenderTitle', 'title_id');
    }
}
