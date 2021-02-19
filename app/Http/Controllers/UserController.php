<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegistrationRequest;
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
}
