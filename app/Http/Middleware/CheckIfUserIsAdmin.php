<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CheckIfUserIsAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        if($request -> user() -> role != 'admin') {
            throw new HttpResponseException(response()->json([
                'errors' => [
                    "message" => [
                        "Only users of type admin can access this resource"
                    ]
                ]
            ], JsonResponse::HTTP_UNAUTHORIZED));
        }
        return $next($request);
    }
}
