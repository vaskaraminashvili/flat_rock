<?php

use App\Http\Controllers\QuizConttroller;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
// we do not to prefix to load front end pages. as it is in admin
// for front side it is Web/Pages
*/

// Route::inertia('/', 'Welcome');


Route::get('/', [QuizConttroller::class, 'index'])
    ->name('index');
Route::get('/take-quiz/{quiz}', [QuizConttroller::class, 'takeQuiz'])
    ->name('takeQuiz');


Route::post('/take-quiz/checkAnswer', [QuizConttroller::class, 'checkAnswer'])
    ->name('checkAnswer');

Route::post('/take-quiz/submit', [QuizConttroller::class, 'submit'])
    ->name('submitQuiz');

Route::get('/results/{site_user_id}', [QuizConttroller::class, 'results'])
    ->name('results');

