<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class Result extends Model
{
    protected $fillable = ['site_user_id', 'quiz_id', 'status', 'score', 'answered_questions', 'started_at', 'finished_at'];

    protected $appends= ['dateDiff'];
    protected $dates = ['started_at', 'finished_at'];
    public function quiz()
    {
        return $this->belongsTo(Quiz::class);
    }

    public function siteUser()
    {
        return $this->belongsTo(SiteUser::class);
    }


    public function getdateDiffAttribute()
    {
        return $this->started_at->diffInSeconds($this->finished_at);
    }
}
