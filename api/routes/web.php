<?php
/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

/** UNAUTHENTICATED ROUTES */

/**
 * Auth routes
 */
$router->group(["prefix" => "auth"], function () use ($router) {
    $router->post("/register", "UserController@register");
    $router->post("/verifyUser", "AuthController@verifyUser");
    $router->post("/verifyPassword", "AuthController@verifyPassword");
    $router->post('/sendValidCodePass', 'AuthMailController@sendValidCodePass');
    $router->post('/checkCode', 'AuthMailController@checkCode');
    $router->post('/resetForgotPassword', 'AuthMailController@resetForgotPassword');
});

/**
 * Titles routes
 */
$router->group(["prefix" => "title"], function () use ($router) {
    $router->get("/list", "TitleController@list");
});

/**
 * Genres routes
 */
$router->group(["prefix" => "genre"], function () use ($router) {
    $router->get("/list", "GenreController@list");
});


/** AUTHENTICATED ROUTES */
$router->group(["middleware" => "auth"], function () use ($router) {
    /**
     * Auth routes
     */
    $router->group(
        ["prefix" => "auth"],
        function () use ($router) {
            $router->delete("/delete", "UserController@delete");
            $router->post("/logout", "AuthController@logout");
            $router->put("/edit", "UserController@edit");
            $router->get("/find", "UserController@find");
            $router->put("/resetPassword", "AuthController@resetPassword");
        }
    );

    /**
     * Likes routes
     */
    $router->group(
        ["prefix" => "user"],
        function () use ($router) {
            $router->get("/likes", "LikeController@list");
        }
    );

    /**
     * Titles routes
     */
    $router->group(
        ["prefix" => "title"],
        function () use ($router) {
            $router->delete("/delete", "TitleController@delete");
            $router->post("/create", "TitleController@create");
            $router->put("/edit", "TitleController@edit");
            $router->get("/find", "TitleController@find");
            $router->post("/like", "LikeController@like");
        }
    );
});