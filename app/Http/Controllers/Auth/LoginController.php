<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Services\Smspilot\SmspilotService;
use App\Services\Twilio\TwilioService;
use App\Models\User;
use http\Env\Response;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */


    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/';

    /**
     * Create a new controller instance.
     *
     * @return void
     */

    /**
     * @var TwilioService
     */
    private $phoneService;

//    public function __construct(TwilioService $twilio)
    public function __construct(SmspilotService $phoneService)
    {
        $this->middleware('guest')->except('logout');
        $this->phoneService = $phoneService;
    }


    public function login(Request $request)
    {
        $login    = $request->post('phone');
        $password = $request->post('password');
        $field    = filter_var($login, FILTER_VALIDATE_EMAIL) ? 'email' : 'phone';
        $message  = '';

        if (Auth::attempt([$field => $login, User::ATTR_PASSWORD => $password],
            (bool)$request->post('remember')
        )) {
            return \auth()->user()->role === User::ROLE_ADMIN ? redirect('/admin') : redirect('/cabinet');
        }

        return \response()->json(['errors' => [
            'message' => 'Неверный логин или пароль!',
            'wrongPassword' => true
        ]], 422);

    }
}
