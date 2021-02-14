<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegistrationRequest;
use App\Models\User;
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

        $access_token = auth() -> user() -> createToken('authToken') -> accessToken;
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
