<?php

namespace App\Http\Controllers;

use App\Models\Genre;
use App\Models\GenreTitle;
use App\Models\Like;
use App\Models\Title;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class LikeController extends Controller
{
    public function like(Request $request): JsonResponse
    {
        try {
            $titleIds = $result = [];
            $liked = Like::where('user_id', '=', $request->user)->get();
            foreach ($liked as $titleLiked) {
                $titleData = Title::where('id', $titleLiked->title_id)->first();
                $result[$titleLiked->title_id]['id'] = $titleData->id;
                $result[$titleLiked->title_id]['name'] = $titleData->name;
                $result[$titleLiked->title_id]['image'] = $titleData->image;
                $result[$titleLiked->title_id]['plot'] = $titleData->plot;
                $result[$titleLiked->title_id]['rate'] = $titleData->rate;
                $result[$titleLiked->title_id]['genres'] = array();
                array_push($titleIds, $titleData->id);
            }
            $genreTitles = GenreTitle::whereIn('title_id', $titleIds)->get();
            foreach ($genreTitles as $genreTitle) {
                $genreData = Genre::where('id', $genreTitle->genre_id)->first();
                $result[$genreTitle->title_id]['genres'][] = $genreData->name;
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
        } catch (\Exception $e) {
            return response()->json($e->getMessage(), 200);
        }
    }

    public function list(Request $request): JsonResponse
    {
        try {
            $response = [];
            $likes = Like::where('user_id', $request->user)->get();
            foreach ($likes as $like) {
                $titleId = $like->title_id;
                $title = \App\Models\Title::findOrFail($titleId);
                if ($title)
                    array_push($response, $title);
            }
            return response()->json($response, 200);
        } catch (\Exception $e) {
            return response()->json($e->getMessage(), 200);
        }
    }
}