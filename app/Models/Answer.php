<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Answer extends Model
{

    protected $fillable = ['question_id' ,'active' , 'correct' , 'answer'];


    public function question()
    {
        return $this->belongsTo(Question::class);
    }
}
