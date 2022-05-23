<?php

use App\Http\Controllers\AnswerController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\QuestionController;
use App\Http\Controllers\QuizController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
// @. use this in app js to change the directory of folder with to load.
// for front side it is Admin/Pages
*/

// Route::inertia('/', 'Welcome');

Route::get('login', [LoginController::class, 'login'])
    ->name('login')
    ->middleware('guest');

Route::post('login', [LoginController::class, 'authenticate'])
    ->name('authenticate')
    ->middleware('guest');

Route::post('logout', [LoginController::class, 'logout'])
    ->name('logout')
    ->middleware('auth');

Route::middleware(['web', 'auth'])->group(function () {
    Route::get('/', function () {
        return Inertia::render('@.Welcome');
    })->name('index');

    Route::resources([
        'quizzes' => QuizController::class,
        'questions' => QuestionController::class,
        'answers' => AnswerController::class,
    ]);
});
