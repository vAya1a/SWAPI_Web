<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PilotController;
use App\Http\Controllers\StarshipController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//Métodos 'API' para el manejo de pilotos (Pilot)

Route::prefix('pilot')->group(function () {
    Route::get('/', [PilotController::class, 'index']);
    Route::get('/{id}', [PilotController::class, 'show']);
    Route::post('/', [PilotController::class, 'store']);
    Route::put('/{id}', [PilotController::class, 'update']);
    Route::delete('/{id}', [PilotController::class, 'destroy']);
});

//Métodos 'API' para el manejo de naves (Starship) 

Route::prefix('starship')->group(function () {
    Route::get('/', [StarshipController::class, 'index']);
    Route::get('/{id}', [StarshipController::class, 'show']);
    Route::post('/', [StarshipController::class, 'store']);
    Route::put('/{id}', [StarshipController::class, 'update']);
    Route::delete('/{id}', [StarshipController::class, 'destroy']);
});

//METODOS PARA MANEJO DE PILOTOS ASOCIADOS A NAVES
Route::prefix('pilotShip')->group(function () {
    Route::get('/',[ StarshipController::class, 'getPilotShip']);
    Route::get('/{id}',[ StarshipController::class, 'getShipPilots']);
    Route::post('/',[ StarshipController::class, 'createPilotShip']);
    Route::delete('/{id}',[ StarshipController::class, 'deletePilotShip']);
});