<?php

use App\Http\Controllers\Admin\CategoryController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Route;

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
