<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegistrationRequest;
use App\Models\User;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function register(RegistrationRequest $request) {

        $user = new User;
        $user -> password = bcrypt($request->password);
        $user -> email = $request -> email;
        $user -> name = $request -> name;
        $user -> role = $request -> role;
        $user ->save();

        $accessToken = $user->createToken('authToken') -> accessToken;
        return response([
            'complete' => true,
            'message' => 'User Created Successfully',
            'access_token' => $accessToken,
            'data' => [
                'user' => $user
            ]
        ], 201);
    }

    public function login(LoginRequest $request) {

        $login_data = [
            'password' => $request -> password,
            'email' => $request -> email
        ];

        if(!auth() -> attempt($login_data)) {
            throw new HttpResponseException(response()->json([
                'errors' => [
                    "email" => ["Email and Password doesn't match"],
                    "password" => ["Email and Password doesn't match"]
                ]
            ], JsonResponse::HTTP_UNPROCESSABLE_ENTITY));
        }

        $access_token = auth() -> user() -> createToken('authToken') -> accessToken;
        return response([
            'complete' => true,
            'access_token' => $access_token,
            'data' => [
                'user' => auth() -> user()
            ]
        ], 250);
    }

    public function logout(Request $request)
    {
        $request -> user() -> token() -> revoke();
        return response([
            'complete' => true,
            'message' => 'Successfully logged out'
        ]);
    }

    public function user(Request $request) {
        return response([
            'complete' => true,
            'message' => 'Successfully found user',
            'data' => [
                'user' => $request -> user()
            ]
        ]);
    }
}
