<?php

use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/app/cacheClear', [\App\Http\Controllers\Api\V1\AppController::class, 'cacheClear'])->middleware('check.admin')->name('cache:clear');

Route::group(['prefix' => 'admin', 'middleware' => ['auth', 'check.admin']], function () {
    Route::get('/', [\App\Http\Controllers\Admin\AdminController::class, 'index'])->name('admin.index');
    Route::post('/sms/activate/{login}', 'Admin\SmsController@activate')->name('admin.sms.activate1');

    Route::get('/promotion-cards/refresh', 'Admin\PromotionCardsController@refresh')->name('promotion-cards.refresh');

    Route::get('/order/{id}/set-status/{status}', [\App\Http\Controllers\Admin\OrderController::class, 'setStatus'])->name('setStatus');

    Route::resources([
        'categories' => \App\Http\Controllers\Admin\CategoryController::class,
        'food' => \App\Http\Controllers\Admin\FoodController::class,
        'coupon' => \App\Http\Controllers\Admin\CouponController::class,
        'order' => \App\Http\Controllers\Admin\OrderController::class,
        'ingridients' => \App\Http\Controllers\Admin\IngridientController::class,
        'option-categories' => \App\Http\Controllers\Admin\CategoryOptionController::class,
        'options' => \App\Http\Controllers\Admin\OptionController::class,
        'setting' => \App\Http\Controllers\Admin\SettingController::class,
        'site-setting' => \App\Http\Controllers\Admin\SiteSettingController::class,
        'sms' => \App\Http\Controllers\Admin\SmsController::class,
        'promotions' => \App\Http\Controllers\Admin\PromotionsController::class,
        'promotion-cards' => \App\Models\PromotionCards\PromotionCards::class,
    ]);

    Route::get('/set/update-prices', [\App\Http\Controllers\Admin\SettingController::class, 'updatePrices'])->name('setting.update-prices');

    Route::put('/ingridients/{ingridientID}/{foodID}',
        [\App\Http\Controllers\Admin\IngridientController::class, 'updateStatus'])->name('ingridients.update-status');
});

Route::group(['prefix' => 'api'], function () {
    Route::get('/success-pay', 'OrderController@webhook');

    Route::group(['prefix' => 'cart'], function () {


    });
});

Route::get('/order/{id}', [\App\Http\Controllers\Admin\OrderController::class, 'show']);
Route::get('/order/{id}/taxi', [\App\Http\Controllers\Admin\OrderController::class, 'taxi'])->name('taxi');

Route::post('/app/settings', 'Api\V1\AppController@settings');
Route::post('/app/siteSettings', 'Api\V1\AppController@siteSettings');
Route::get('/app/cacheClear', 'Api\V1\AppController@cacheClear')->middleware('check.admin')->name('cache:clear');

Route::post('/promotions/cards', 'Api\V1\PromotionCardsApiController@index');


Route::get('/', function () {
    return Inertia::render('Welcome', [
        'site_settings' => \App\Models\SiteSetting::query()->get()->keyBy('key')->map(static fn($item) => $item->value),
    ]);
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user('web');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


Route::get('/orders', function () {
    return Inertia::render('Orders');
})->middleware(['auth', 'verified'])->name('orders');


Route::get('/delivery', function () {
    return Inertia::render('Delivery');
})->name('delivery');

Route::get('/pay', function () {
    return Inertia::render('PayPage');
})->name('pay');

Route::get('/success', function () {
    return Inertia::render('SuccessPage');
})->name('result');

Route::get('/about', function () {
    return Inertia::render('AboutPage');
})->name('about');

Route::get('/profile', [\App\Http\Controllers\Controller::class, 'profile'])
    ->middleware('auth:sanctum')
    ->name('profile');

require __DIR__ . '/auth.php';


Route::post('register', [\App\Http\Controllers\Auth\RegisterController::class, 'store']);
Route::post('login', [\App\Http\Controllers\Auth\LoginController::class, 'login']);

Route::get('/login', function (Request $request) {
    return redirect('/');
})->name('login');



// tesham
