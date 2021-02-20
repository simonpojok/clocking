<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegistrationRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index() {
        return User::all();
    }

    public function createUser(RegistrationRequest $request) {
        $user = new User;
        $user -> password = bcrypt($request->password);
        $user -> email = $request -> email;
        $user -> name = $request -> name;
        $user -> role = $request -> role;
        $user ->save();
        return "Done";
    }

    public function delete($id) {
        $user = User::find($id);
        if($user == null) {
            return response([
                "message" => "User Not Found"
            ], 301);
        }

        $user -> delete();
        return response([
            "message" => "User Deleted Successfully"
        ], 201);
    }

    public function user($id) {
        $user = User::find($id);
        return $user;
    }

    public function update(Request $request, $id) {
        $user = User::find($id);
        if($request->password != null) {
            $user -> password = bcrypt($request->password);
        }
        if($request -> email != null) {
            $user -> email = $request -> email;
        }
        if($request -> name != null) {
            $user -> name = $request -> name;
        }

        if($request -> role != null) {
            $user -> role = $request -> role;
        }
        $user ->save();

        $accessToken = $user->createToken('authToken') -> accessToken;
        return response([
            'complete' => true,
            'message' => 'User Updated Successfully',
            'access_token' => $accessToken,
            'data' => [
                'user' => $user
            ]
        ], 201);
    }
}
