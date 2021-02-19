<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index() {
        return User::all();
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
