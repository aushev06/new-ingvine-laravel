<?php

namespace App\Http\Controllers\Auth;

use App\Http\Requests\AuthRequest;
use App\Notifications\UserRegisteredNotification;
use App\Providers\RouteServiceProvider;
use App\Services\Smspilot\SmspilotService;
use App\Services\Twilio\TwilioService;
use App\Models\User;
use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Events\Verified;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Validation\Rules\Password;
use TimeHunter\LaravelGoogleReCaptchaV3\Validations\GoogleReCaptchaV3ValidationRule;
use Twilio\Rest\Client;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = '/';


    /**
     * @var SmspilotService
     */
    private $phoneService;

    /**
     * Create a new controller instance.
     *
     * @param SmspilotService $phoneService
     */
//    public function __construct(TwilioService $twilio)
    public function __construct(SmspilotService $phoneService)
    {
        $this->middleware('guest');
        $this->phoneService = $phoneService;
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param array $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => ['required', 'string', 'max:255'],
//            'email'    => ['string', 'nullable', 'email', 'max:255', 'unique:' . User::TABLE_NAME],
            'phone' => ['required', 'string', 'max:255', 'unique:' . User::TABLE_NAME],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
//            'g-recaptcha-response' => [new GoogleReCaptchaV3ValidationRule('register')]
        ], [
            'name.required' => 'Поле Имя обязательно для заполнения',
            'email.unique' => 'Этот Email-адрес уже используется',
            'phone.unique' => 'Этот телефон уже используется',
            'phone.required' => 'Необходимо указать номер телефона',
            'password.min' => 'Пароль должен состоять минимум из 8 символов',
            'password.confirmed' => 'Пароли не совпадают',
            'password.required' => 'Поле Пароль обязательно для заполнения'
        ]);
    }

    /**
     * Handle an incoming registration request.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\RedirectResponse
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        $this->validator($request->all())->validate();

        $user = User::create([
            'name' => $request->name,
            'phone' => $request->phone,
            'password' => Hash::make($request->password),
        ]);

        event(new Registered($user));

        Auth::login($user);

        return redirect(RouteServiceProvider::HOME);
    }

    public function confirm(Request $request)
    {
        $code = (string)$request->post('code');

        $login = DB::table('user_auth_codes')->where('code', '=', $code)->select('login')->first();

        if (!$login) {
            return \response()->json([
                'errors' => ['code' => 'Неверный код активации']
            ], 400);
        }

        $user = User::query()->where('phone', '=', $login->login)->first();

        if (!$user) {
            return \response()->json([
                'errors' => ['code' => 'Неверный код активации']
            ], 400);
        }

        if ($user->markPhoneAsVerified()) {
            DB::table('user_auth_codes')->where('login', '=', $user->phone)->delete();
            $this->guard()->login($user);
            return 'success';
        }

        return 'error';
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param array $data
     * @return \App\Models\User
     */
    protected function create(array $data)
    {
//        $phone = str_replace(["+7", ' ', '(', ')'], '', $data['phone']);
        $phone = str_replace(["+", ' ', '-', '(', ')'], '', $data['phone']);

        return User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'phone' => $phone,
            'password' => Hash::make($data['password']),
            'birthday' => $data['birthday']
        ]);
    }
}
