<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SiteUser extends Model
{
    protected $fillable = ['name', 'surname' , 'email'];


    public function results()
    {
        return $this->hasMany(Result::class);
    }
}
