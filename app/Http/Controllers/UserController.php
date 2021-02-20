<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegistrationRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Models\Attendance;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use function PHPUnit\Framework\isEmpty;

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

    public function status(Request $request) {
        $user_id = $request -> user_id;
        $time = Carbon::now();

        $attendance = Attendance::where('user_id', '=', $request -> user() -> id)
            ->whereDate('date', $time->toDateString())
            -> get() -> first();

        return [
            "times" => [
                "time_in" => $attendance -> time_in != null,
                "time_out" => $attendance -> time_out != null
            ]
        ];
    }
}
