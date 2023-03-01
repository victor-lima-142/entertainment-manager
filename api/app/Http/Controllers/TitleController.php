<?php

namespace App\Http\Controllers;

use App\Models\Genre;
use App\Models\GenreTitle;
use App\Models\Title;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class TitleController extends Controller
{
    public function list(Request $request): JsonResponse
    {
        $titles = Title::all();
        $genres = Genre::all();
        $genreTitles = GenreTitle::all();
        $genreAux = $result = [];
        foreach ($genreTitles as $genreTitle) {
            foreach ($genres as $genre) {
                if ($genre->id === $genreTitle->genre_id) {
                    $genreAux[$genreTitle->title_id][] = $genre->name;
                }
            }
        }
        foreach ($titles as $title) {
            $result[$title->id] = $title;
            $result[$title->id]['genres'] = $genreAux[$title->id];
        }
        if ($request->type) {
            $result = array_filter($result, function ($title) use ($request) {
                return $title->type == $request->type;
            });
        }
        if ($request->genre) {
            $result = array_filter($result, function ($title) use ($request) {
                return in_array($request->genre, $title['genres']);
            });
        }
        if ($request->id) {
            $result = array_filter($result, function ($title) use ($request) {
                return $title->id == $request->id;
            });
        }
        return response()->json($result, 200);

    }

    public function find(Request $request): JsonResponse
    {
        try {
            $title = Title::findOrFail($request->title);
            $like = self::checkLike($title->id, $request->user);
            $title->liked = ($like) ? true : false;
            return response()->json($title, 200);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

    public function create(Request $request): JsonResponse
    {
        try {
            $check = self::checkRequest(['name', 'release'], $request);
            if (!$check)
                return $check;
            $title = new Title([
                'name' => $request->name,
                'release' => $request->release,
                'rate' => !$request->rate ? null : $request->rate,
                'type' => $request->type,
                'evaluators' => !$request->evaluators ? null : $request->evaluators
            ]);
            if ($title->save())
                return response()->json($title, 200);
            return response()->json(['message' => "The application couldn't make new title"], 500);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

    public function update(Request $request): JsonResponse
    {
        $title = Title::findOrFail($request->title);
        $title->update($request);
        $title->save();
        return response()->json(['message' => 'Title was update.'], 200);
    }

    public function destroy(Request $request): JsonResponse
    {
        $title = Title::findOrFail($request->title);
        $title->forceDelete();
        return response()->json(['message' => 'Title was delete.'], 200);
    }
}