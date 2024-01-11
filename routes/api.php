<?php

use App\Http\Controllers\Admin\CategoryController;
use App\Jobs\SendFusionPosOrderJob;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Route;
use Illuminate\Validation\ValidationException;

//header('Access-Control-Allow-Origin: *');

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:sanctum')->delete('/user', function (Request $request) {
    return User::query()->where('id', $request->user()->id)->delete();
});
Route::middleware('auth:sanctum')->get('/orders', [\App\Http\Controllers\Api\V1\OrderController::class, 'index']);

Route::group(['prefix' => 'food'], function () {
    Route::get('/{id}', 'FoodController@byId');
});


Route::apiResource('categories', 'Api\V1\CategoryController');
Route::apiResource('foods', \App\Http\Controllers\Api\V1\FoodApiController::class);
Route::apiResource('promotions', 'Api\V1\PromotionsApiController');
Route::get('/settings', function () {
    return \App\Models\Setting::query()->get();
});

Route::post('/check-coupon/{coupon}', [\App\Http\Controllers\Api\V1\CouponController::class, 'checkCoupon'])
    ->name('coupon.check');

Route::group(['prefix' => 'cart'], function () {
    Route::options('/cart-property', [\App\Http\Controllers\CartController::class, 'store']);
    Route::options('/', [\App\Http\Controllers\CartController::class, 'store']);
    Route::options('/add-order', [\App\Http\Controllers\CartController::class, 'store']);

    Route::post('/', [\App\Http\Controllers\CartController::class, 'store']);
    Route::post('/add-to-cart', [\App\Http\Controllers\CartController::class, 'store'])->name('cart.add-to-cart');
    Route::post('/get', [\App\Http\Controllers\CartController::class, 'show'])->name('cart.get');
    Route::post('/add-order', [\App\Http\Controllers\OrderController::class, 'addOrder'])->name('cart.addOrder');
    Route::post('/activate-coupon', [\App\Http\Controllers\CartController::class, 'activateCoupon'])->name(
        'cart.activate-coupon'
    );

    Route::delete('/{id}', [\App\Http\Controllers\CartController::class, 'destroy'])->name(
        'cart.destroy'
    ); // Удаление корзины

    Route::put(
        '/cart-property',
        [\App\Http\Controllers\CartController::class, 'updateProperty']
    )->name('cart.updateProperty'); // Обновление проперти в корзине

    Route::delete(
        '/cart-property/{cartPropertyId}',
        [\App\Http\Controllers\CartController::class, 'destroyProperty']
    )->name('cart.destroyProperty'); // Удаление проперти у корзины


});

Route::get('/console', function () {
    Artisan::call("migrate");
    Artisan::call("cache:clear");
    Artisan::call("storage:link");
});

Route::get('/success', function () {
    return view('cart.complete');
});

Route::get('/console/cache-clear', 'ConsoleController@cacheClear')->middleware('check.admin');
Route::get('/console/migrate', 'ConsoleController@migrate');
Route::get('/console/php', function () {
    phpinfo();
});


Route::post("categories/set-position", [CategoryController::class, 'setPosition']);  // Сортировка категорий


Route::get('/pos-foods', [\App\Http\Controllers\Admin\FoodController::class, 'posItems']);
Route::get('/fpos', function (Request $request) {

    $name = $request->get('name') ?? '';


    $filter = [
        'id_network' => 1,
        'active' => 'yes',
    ];

    if ($name) {
        $filter['name'] = $name;
    }

    $filter = json_encode($filter);

    $curl = curl_init();

    curl_setopt_array($curl, array(
        CURLOPT_URL => 'https://ingvine-food3.fusionpos.ru/api/v1/menu?filter=' . $filter,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => '',
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 0,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => 'GET',
        CURLOPT_HTTPHEADER => array(
            'Accept: application/json',
            'Authorization: Bearer 052d52c119fd1876139c1653998f662b6942b9ea',
            'Cookie: _csrf=5669341c6feabea8031b9ce7b448e555ecf2715d74348bbd93a12bcf523de669a%3A2%3A%7Bi%3A0%3Bs%3A5%3A%22_csrf%22%3Bi%3A1%3Bs%3A32%3A%22iiIWCPXtAd-FXQsgwlyxmNNVjrBzpG2e%22%3B%7D'
        ),
    ));

    $response = curl_exec($curl);

    $data = json_decode($response, true);
    $data = array_map(fn($item) => ['value' => $item['id'], 'label' => $item['name']], $data['data']['items']);
    curl_close($curl);
    return $data;

});


//webhooks

Route::post('/webhook/fusionpos/update-order-status', [\App\Http\Controllers\Api\V1\OrderController::class, 'updateFusionPosOrderStatusWebhook']);
Route::get('/callback/alfabank/success', function (Request $request) {
    $orderId = $request->orderId;
    $payment = \App\Models\Payment::query()->where('uuid', $orderId)->first();
    if (!$payment) {
        abort(404, 'Платеж не найден');
    }
    $payment->status = 'completed';
    $payment->save();
    $item = \App\Models\Order\Order::query()->where('id', $payment->order_number)->first();
    $item->status = \App\Models\Order\Order::STATUS_PAID;
    $item->save();
    SendFusionPosOrderJob::dispatch($item);

    return redirect('/success');
});

Route::get('/callback/alfabank/fail', function (Request $request) {
    $orderId = $request->orderId;
    $payment = \App\Models\Payment::query()->where('uuid', $orderId)->first();
    if (!$payment) {
        abort(404, 'Платеж не найден');
    }
    $payment->status = 'failed';
    $payment->save();

    return redirect('/');
});


Route::get('/taxi/find-addresses', [\App\Http\Controllers\Api\V1\TaxiController::class, 'findAddresses']);
Route::get('/taxi/get-delivery-sum', [\App\Http\Controllers\Api\V1\TaxiController::class, 'deliverySum']);

Route::post('register', [\App\Http\Controllers\Auth\RegisteredUserController::class, 'storeApi']);
Route::post('/token', function (Request $request) {
    $request->validate([
        'phone' => 'required',
        'password' => 'required',
        'device_name' => 'required',
    ]);

    $user = User::where('phone', $request->phone)->first();

    if (!$user || !Hash::check($request->password, $user->password)) {
        throw ValidationException::withMessages([
            'phone' => ['The provided credentials are incorrect.'],
        ]);
    }

    return $user->createToken($request->device_name)->plainTextToken;
});
