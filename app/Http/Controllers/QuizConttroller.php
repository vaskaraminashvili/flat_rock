<?php

namespace App\Http\Controllers;

use App\Models\Answer;
use App\Models\Question;
use App\Models\Quiz;
use Illuminate\Http\Request;
use Inertia\Inertia;

class QuizConttroller extends Controller
{
    public function index(){
        $quizzes = Quiz::query()
            ->where('active',1)
            ->get();
        return Inertia::render('Quizz/Index',[
            'quizzes' => $quizzes
        ]);
    }

    public function takeQuiz($quiz_id){
        $quiz = Quiz::query()
            ->where('id', $quiz_id)
            ->where('active',1)
            ->with(['questions.answers:question_id,answer,id'])
            ->first();
        return Inertia::render('Quizz/TakeQuiz',[
            'quiz' => $quiz
        ]);
    }

    public function checkAnswer(Request $request){
        $answer = Answer::query()
            ->where('id', $request->answer_id)
            ->where('question_id', $request->question_id)
            ->where('active',1)
            ->where('correct',1)
            ->first();
        if ($answer){
            return response()->json([
                'answer' => 1,
            ]);
        }else{
            return response()->json([
                'answer' => 0,
            ]);
        }
    }
}
