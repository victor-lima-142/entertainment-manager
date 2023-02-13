<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GenderTitle extends Model
{
    protected $primaryKey = 'id';

    protected $fillable = [
        'gender_id',
        'title_id'
    ];

    protected $foreignKey = ['gender_id', 'title_id'];

    protected $dates = [
        'deleted_at',
        'created_at',
        'updated_at'
    ];

    public function gender()
    {
        return $this->hasOne('Gender', 'gender_id');
    }

    public function title()
    {
        return $this->hasOne('Title', 'title_id');
    }
}
