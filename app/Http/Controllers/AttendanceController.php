<?php

namespace App\Http\Controllers;

use App\Http\Requests\TimeInRequest;
use App\Models\Attendance;
use Carbon\Carbon;
use Illuminate\Http\Request;

class AttendanceController extends Controller
{
    public function index()
    {
        return Attendance::orderBy('created_at', 'DESC') -> get();
    }



    public function time_in(TimeInRequest $request) {
        $user_id = $request -> user_id;
        $time = Carbon::now();

        $attendance = Attendance::where('user_id', '=', $user_id)
            ->whereDate('date', $time->toDateString())
            -> get();

        if($attendance->isEmpty()) {
            $attendance = new Attendance;
            $attendance -> user_id = $user_id;
            $attendance -> time_in = $time -> toTimeString();
            $attendance -> date = $time -> toDateString();
            $attendance -> save();
            return response([
                "complete" => true,
                "message"=> "Clocked In Successfully",
                "attendance" => $attendance
            ], 250);
        }
//        return "Already Attended";
        return response([
            "complete" => false,
            "message" => "Already Clocked In",
            "attendance" => null
        ], 260);
    }

    public function time_out(Request $request) {
        $user_id = $request -> attendance['user_id'];
        $time = Carbon::now();

        $attendance = Attendance::where('user_id', '=', $user_id)
            ->whereDate('date', $time->toDateString())
            -> first();

        if($attendance == null) {
            return response([
                "complete" => false,
                "message" => "No Clock In Record Found",
                "attendance" => null
            ], 260);
        }

        if($attendance -> time_out == null) {
            $attendance -> time_out = $time -> toTimeString();
            $attendance -> save();
            return response([
                "complete" => true,
                "message"=> "Clocked Out Successfully",
                "attendance" => $attendance
            ], 250);
        }
        return response([
            "complete" => true,
            "message"=> "Clocked Out already",
            "attendance" => $attendance
        ], 240);
    }
}
