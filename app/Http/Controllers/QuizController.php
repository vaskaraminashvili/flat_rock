<?php

namespace App\Http\Controllers;

use App\Models\Quiz;
use Illuminate\Http\Request;
use Inertia\Inertia;

class QuizController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $quizzes = Quiz::query()
            ->orderBy('id', 'DESC')
            ->paginate(10)
            ->withQueryString()
            ->through(fn($quizz) => [
                'id' => $quizz->id,
                'title' => $quizz->title,
                'time' => $quizz->time,
                'active' => $quizz->active,
            ]);
        return Inertia::render('@.Quizz/Index', [
            'quizzes' => $quizzes
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('@.Quizz/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $request->validate([
            'title' => 'required|max:150',
            'time' => 'required|numeric|max:60',
            'description' => 'nullable|max:600',
        ]);

        $input = $request->all();

        Quiz::create($input);

        return redirect()->route('admin.quizzes.index');

    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Quizz $quizz)
    {
        return Inertia::render('@.Quizz/Edit', [
            'quizz' => $quizz
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Quizz $quizz)
    {
        $request->validate([
            'title' => 'required|max:150',
            'time' => 'required|numeric|max:60',
            'description' => 'nullable|max:600',
        ]);
        $input = $request->all();
        $quizz->update($input);

        return redirect()->route('admin.quizz.edit', $quizz->id);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Quiz $quiz)
    {
        $quiz->delete();

        return redirect()->route('admin.quizzes.index');
    }


}
