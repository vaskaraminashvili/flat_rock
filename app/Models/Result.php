<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Result extends Model
{
    protected $fillable = ['site_user_id' , 'quiz_id' , 'status', 'score' , 'answered_questions'];

    public function quiz()
    {
        return $this->belongsTo(Quiz::class);
    }
}
