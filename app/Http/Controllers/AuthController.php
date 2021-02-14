<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function register(Request $request) {
        $validated_data = $request->validate([
            'name' => 'required|max:55',
            'email' => 'email|required|unique:users',
            'password' => 'required|min:8',
            'role' => 'required'
        ]);

        $validated_data['password'] = bcrypt($request->password);
        $user = User::create($validated_data);
        $accessToken = $user->createToken('authToken') -> accessToken();
        return response([
            'complete' => true,
            'message' => 'User Created Successfully',
            'access_token' => $accessToken,
            'data' => [
                'user' => $user
            ]
        ]);
    }

    public function login(Request $request) {
        $login_data = $request -> validate([
            'email' => 'email|required',
            'password' => 'required'
        ]);

        if(!auth() -> attempt($login_data)) {
            return response([
                'complete' => false,
                'message' => 'Invalid Credentials'
            ]);
        }

        $access_token = auth() -> user() -> createToke('authToken') -> accessToken;
        return response([
            'complete' => true,
            'access_token' => $access_token,
            'data' => [
                'user' => auth() -> user()
            ]
        ]);
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
