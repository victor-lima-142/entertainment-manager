<?php

namespace App\Http\Middleware;

use App\Models\Token;
use App\Models\User;
use Closure;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class Auth
{
    public function handle(Request $request, Closure $next):  JsonResponse | Closure | Response
    {
        $header = $request->header();
        if (!$header) return $this->renderMessage("Invalid Header config");
        $authorization = $header['authorization'];
        if (!$authorization) return $this->renderMessage("Invalid Authorization");
        $token = str_replace("Bearer ", "", $authorization);
        if (!$token) return $this->renderMessage("Invalid Token Credential");
        if (!$this->checkToken($token[0])) return $this->renderMessage("Token expired or invalid");
        $tk = self::getTk($token[0]);
        $request['user'] = $tk->user_id;
        return $next($request);
    }

    protected function checkUser(int $user): bool|User
    {
        $result = User::where('id', $user)->first();
        if (!$result || count($result->toArray()) <= 0) return false;
        if (!$result->logged) return false;
        return $result;
    }

    protected function checkToken(string $tk)
    {
        $token = Token::where('token', $tk)->first();
        if (!$token) return false;
        if (!$this->checkUser($token->user_id)) return false;
        if ($token->token == $tk) return true;
        return false;
    }

    static protected function getTk(string $tk) {
        $token = Token::where('token', $tk)->first();
        return $token;
    }

    protected function renderMessage(string|array $message)
    {
        return response()->json(["message" => $message], 404);
    }
}