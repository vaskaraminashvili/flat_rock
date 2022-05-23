<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Quiz extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = ['title', 'description', 'time', 'score', 'active'];

    public function questions()
    {
        return $this->hasMany(Question::class);
    }

    public function questionsAnswers()
    {
        return $this->hasManyThrough(Answer::class, Question::class);
    }
}
