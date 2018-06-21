<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::prefix('resourse')->group(function() {
	Route::resource('app', 'AppController');
	Route::resource('action', 'ActionController');
	Route::resource('notification', 'NotificationController');
	Route::resource('news', 'NewsController');
	Route::resource('post', 'PostController');
});

Route::get('/{any}', function ($any) {

    return view('welcome');

})->where('any', '.*');