<?php

use Illuminate\Support\Facades\Route;
use GuzzleHttp\Client;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
$client = new Client([
    // Base URI is used with relative requests
    'base_uri' => 'https://swapi.dev/api/',
    // You can set any number of default request options.
    'timeout'  => 2.0,
]);
    $response = $client->request('GET', 'people');
    return json_decode($response->getBody()->getContents());
    
    return view('welcome');
});
