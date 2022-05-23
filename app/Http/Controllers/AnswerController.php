<?php

namespace App\Http\Controllers;

use App\Models\Answer;
use App\Models\Question;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;

class AnswerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $answers = Answer::query()
            ->with('question')
            ->orderBy('question_id', 'DESC')
            ->paginate(10)
            ->withQueryString()
            ->through(fn($answer) => [
                'id' => $answer->id,
                'question' => Str::words($answer->question?->question, 5, ' ...'),
                'answer' => Str::words($answer->answer, 5, ' ...'),
                'correct' => $answer->correct,
                'active' => $answer->active,
            ]);
        return Inertia::render('@.Answer/Index', [
            'answers' => $answers
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $questions = Question::query()
            ->where('active', 1)
            ->orderBy('id' ,'DESC')
            ->get(['id' , 'question']);
        return Inertia::render('@.Answer/Create',[
            'questions' => $questions
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
            'question_id' => 'required',
            'answer' => 'required|max:150',
        ]);

        $input = $request->all();

        $answer = Answer::create($input);

        return redirect()->route('admin.answers.create');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Answer  $answer
     * @return \Illuminate\Http\Response
     */
    public function show(Answer $answer)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Answer  $answer
     * @return \Illuminate\Http\Response
     */
    public function edit(Answer $answer)
    {
        $questions = Question::query()
            ->where('active', 1)
            ->orderBy('id' ,'DESC')
            ->get(['id' , 'question']);
        return Inertia::render('@.Answer/Edit', [
            'questions' => $questions,
            'answer' => $answer
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Answer  $answer
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Answer $answer)
    {
        $request->validate([
            'question_id' => 'required',
            'answer' => 'required|max:150',
        ]);

        $input = $request->all();
        $answer->update($input);

        return redirect()->route('admin.answers.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Answer  $answer
     * @return \Illuminate\Http\Response
     */
    public function destroy(Answer $answer)
    {
        return 'destroy';
    }
}
