<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Like extends Model
{
    protected $primaryKey = 'id';

    protected $fillable = [
        'user_id',
        'title_id'
    ];

    protected $foreignKey = ['user_id', 'title_id'];

    protected $dates = [
        'deleted_at',
        'created_at',
        'updated_at'
    ];

    public function user()
    {
        return $this->hasOne('User', 'user_id');
    }

    public function title()
    {
        return $this->hasOne('Title', 'title_id');
    }
}
