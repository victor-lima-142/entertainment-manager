<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Gender extends Model
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

    public function genderTitle()
    {
        return $this->belongsTo('GenderTitle', 'gender_id');
    }
}
