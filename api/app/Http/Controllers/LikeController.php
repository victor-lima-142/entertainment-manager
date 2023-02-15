<?php

namespace App\Http\Controllers;

use App\Models\Like;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class LikeController extends Controller
{
    public function like(Request $request): JsonResponse
    {
        try {
            $titleId = $request->titleId;
            $user = $request->user;
            $response = null;
            $likeExists = self::checkLike($titleId, $user);
            if (!$likeExists) {
                $like = new Like([
                    'title_id' => $titleId,
                    'user_id' => $user
                ]);
                $like->save();
                $response = $like;
            } else {
                $likeExists->forceDelete();
                $response = ["message" => "success"];
            }
            return response()->json($response, 200);
        } catch (\Exception $e) {
            return response()->json($e->getMessage(), 200);
        }
    }

    public function list(Request $request): JsonResponse {
        try {
            $response = Like::where('user_id', $request->user)->get();
            return response()->json($response, 200);
        } catch (\Exception $e) {
            return response()->json($e->getMessage(), 200);
        }
    }
}