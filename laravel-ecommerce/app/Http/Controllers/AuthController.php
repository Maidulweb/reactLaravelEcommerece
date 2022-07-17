<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class AuthController extends Controller
{
    public function register (Request $request){
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required',
            'password' => 'required',
        ]);
 
        if ($validator->fails()) {
            return response()->json([
                'validation_errors' => $validator->messages()
            ]);
        }

        $user = new User;

        $user->name = $request->input('name');
        $user->email = $request->input('email');
        $user->password = Hash::make($request->input('password'));
        $user->save();
        $token = $user->createToken($user->email. '_Token')->plainTextToken;
        return response()->json([
            'status' => 200,
            'token' => $token,
        ]);
    }

    public function login (Request $request){
        $validator = Validator::make($request->all(), [
            'email' => 'required',
            'password' => 'required',
        ]);
 
        if ($validator->fails()) {
            return response()->json([
                'validation_errors' => $validator->messages()
            ]);
        }

        $user = User::where('email', $request->email)->first();

     
        if (! $user || ! Hash::check($request->password, $user->password)) {
           
            return response()->json([
                'status' => 204,
                'warning' => 'The provided credentials are incorrect!!!!!'
            ]);
        }
        $token = $user->createToken($user->email. '_Token')->plainTextToken;
        return response()->json([
            'status' => 200,
            'token' => $token,
        ]);

    }

    public function logout (){

        Auth::user()->tokens()->delete();
         
        return response()->json([
            'status' => 200,
            'success' => 'Logout Successfully'
        ]);
    }


}
