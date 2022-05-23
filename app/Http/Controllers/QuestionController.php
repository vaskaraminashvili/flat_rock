<?php

namespace App\Http\Controllers;

use App\Models\Question;
use App\Models\Quiz;
use Illuminate\Http\Request;
use Inertia\Inertia;

class QuestionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $questions = Question::query()
            ->with('quiz')
            ->orderBy('id', 'DESC')
            ->paginate(10)
            ->withQueryString()
            ->through(fn($question) => [
                'id' => $question->id,
                'quiz' => $question->quiz->title,
                'question' => $question->question,
                'score' => $question->score,
                'active' => $question->active,
            ]);
        return Inertia::render('@.Question/Index', [
            'questions' => $questions
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $quizzes = Quiz::query()
            ->where('active', 1)
            ->orderBy('id' ,'DESC')
            ->get(['id' , 'title']);
        return Inertia::render('@.Question/Create',[
            'quizzes' => $quizzes
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'quiz_id' => 'required',
            'question' => 'required|max:150',
            'score' => 'required|numeric|max:60',
            'type' => 'required',
        ]);

        $input = $request->all();

        $question = Question::create($input);

        return redirect()->route('admin.questions.edit', ['question' =>$question->id]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Question  $question
     * @return \Illuminate\Http\Response
     */
    public function show(Question $question)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Question  $question
     * @return \Illuminate\Http\Response
     */
    public function edit(Question $question)
    {
        $quizzes = Quiz::query()
            ->where('active', 1)
            ->orderBy('id' ,'DESC')
            ->get(['id' , 'title']);
        return Inertia::render('@.Question/Edit', [
            'question' => $question,
            'quizzes' => $quizzes
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Question  $question
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Question $question)
    {
        $request->validate([
            'quiz_id' => 'required',
            'question' => 'required|max:150',
            'score' => 'required|numeric|max:60',
            'type' => 'required',
        ]);
        $input = $request->all();
        $question->update($input);

        return redirect()->route('admin.questions.edit', $question->id);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Question  $question
     * @return \Illuminate\Http\Response
     */
    public function destroy(Question $question)
    {
        return 'destroy';

    }
}
