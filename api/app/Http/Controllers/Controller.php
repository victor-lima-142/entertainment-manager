<?php

namespace App\Http\Controllers;

use App\Models\Like;
use App\Models\Title;
use App\Models\Token;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Laravel\Lumen\Routing\Controller as BaseController;

class Controller extends BaseController
{
    static protected function checkRequest(array $required_fields, Request $request): JsonResponse | bool
    {
        foreach ($required_fields as $field) {
            if (!$request[$field]) {
                return response()->json(["message" => "Too many parameters in request. Field required: $field"], 404);
            }
        }

        return true;
    }

    static protected function checkUser(int $user): User|bool
    {
        $user = User::find($user);
        if (!$user)
            return false;
        return $user;
    }

    static protected function checkToken(int $userOrToken): Token|bool
    {
        $token = Token::where("user_id", $userOrToken)->orWhere("id", $userOrToken)->first();
        if (!$token)
            return false;
        return $token;
    }

    static protected function checkTitle(int $titleId): Title|bool {
        $title = Title::where("id", $titleId)->first();
        if (!$title)
            return false;
        return $title;
    }

    static protected function checkLike(int $titleId, int $userId): Like|bool {
        $like = Like::where("title_id", $titleId)->where("user_id", $userId)->first();
        if (!$like)
            return false;
        return $like;
    }

}
