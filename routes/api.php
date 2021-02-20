<?php

use App\Http\Controllers\AttendanceController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/account/login', [AuthController::class, 'login']);
Route::middleware('auth:api') -> group(function () {
    Route::get('/attendance', [AttendanceController::class, 'index'])->middleware('admin');
    Route::get('/attendance/user-time', [AttendanceController::class, 'userAttendance']);
    Route::prefix('/times') -> group(function () {
        Route::post('/time-in', [AttendanceController::class, 'time_in']);
        Route::post('/time-out', [AttendanceController::class, 'time_out']);
    });
    Route::prefix('/account') -> group(function () {
        Route::post('/register', [AuthController::class, 'register'])->middleware('admin');
        Route::get('/logout', [AuthController::class, 'logout']);
        Route::get('/user', [AuthController::class, 'user']);
    });
    Route::prefix('users') -> group(function () {
        Route::get('/', [UserController::class, 'index'])->middleware('admin');
        Route::get('/status', [UserController::class, 'status']);
        Route::get('/me', [UserController::class, 'me']);
        Route::delete('/{id}', [UserController::class, 'delete'])->middleware('admin');
        Route::get('/{id}', [UserController::class, 'user'])->middleware('admin');
        Route::put('/{id}', [UserController::class, 'update'])->middleware('admin');
        Route::post('/create', [UserController::class, 'createUser'])->middleware('admin');
    });
});
