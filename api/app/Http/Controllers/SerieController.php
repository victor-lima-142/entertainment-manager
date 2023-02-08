<?php

namespace App\Http\Controllers;

use App\Models\Serie;
use hmerritt\Imdb;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class SerieController extends Controller
{

    public function list(): JsonResponse
    {
        $series = Serie::all();
        return response()->json($series, 200);
    }

    public function find(Request $request): JsonResponse
    {
        try {
            $serie = Serie::findOrFail($request->serie);
            return response()->json($serie, 200);
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
            $serie = new Serie([
                'name' => $request->name,
                'release' => $request->release,
                'rate' => !$request->rate ? null : $request->rate,
                'evaluators' => !$request->evaluators ? null : $request->evaluators
            ]);
            if ($serie->save())
                return response()->json($serie, 200);
            return response()->json(['message' => "The application couldn't make new serie"], 500);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

    public function update(Request $request): JsonResponse
    {
        $serie = Serie::findOrFail($request->serie);
        $serie->update($request);
        $serie->save();
        return response()->json(['message' => 'Serie was update.'], 200);
    }

    public function destroy(Request $request): JsonResponse
    {
        $serie = Serie::findOrFail($request->serie);
        $serie->forceDelete();
        return response()->json(['message' => 'Serie was delete.'], 200);
    }
}