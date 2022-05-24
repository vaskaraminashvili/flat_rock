<?php

namespace App\Http\Controllers;

use App\Models\Answer;
use App\Models\Question;
use App\Models\Quiz;
use App\Models\Result;
use App\Models\SiteUser;
use App\Models\User;
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

    public function submit(Request $request){
        $correct_answers = 0;
        $answered_questions = 0;
        foreach ($request->results as $result){
            if ($result['correct'] == 1){
                $correct_answers ++;
            }
            if ($result['question_id'] <> 0){
                $answered_questions ++;
            }
        }
        $user = SiteUser::firstOrCreate(
            [ 'email' => $request->user['email']],
            ['name' => $request->user['name'] , 'surname' => $request->user['surname']],
        );

        Result::firstOrCreate([
            'site_user_id' => $user->id,
            'quiz_id' => 3,
            'status' => 1,
            'score' => $correct_answers,
            'answered_questions' => $answered_questions,
        ]);
        return redirect()->route('results' , $user->id);
    }

    public function results($site_user_id)
    {
        $user = SiteUser::whereId($site_user_id)->with(['results' , 'results.quiz'])->first();
        return Inertia::render('Quizz/Results',[
            'user' => $user
        ]);
    }
}
