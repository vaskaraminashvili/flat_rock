<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Quizz extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $table = 'quizz';
    protected $fillable = ['title', 'description', 'time', 'active'];
}
