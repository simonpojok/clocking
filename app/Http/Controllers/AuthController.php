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
}
