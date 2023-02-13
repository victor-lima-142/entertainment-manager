<?php

namespace App\Http\Controllers;

use App\Models\Title;
use hmerritt\Imdb;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class TitleController extends Controller
{

    public function list(): JsonResponse
    {
        $titles = Title::all();
        return response()->json($titles, 200);
    }

    public function find(Request $request): JsonResponse
    {
        try {
            $title = Title::findOrFail($request->title);
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