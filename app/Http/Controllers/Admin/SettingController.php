<?php

namespace App\Http\Controllers\Admin;

use App\Jobs\ImportFusionPosFoodsJob;
use App\Models\Food\FoodProperty;
use App\Models\Pos;
use App\Models\Setting;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Cache;
use Illuminate\View\View;

class SettingController extends Controller
{
    const TITLE = "Настройки";


    const ROUTE_INDEX = 'setting.index';
    const ROUTE_CREATE = 'setting.create';
    const ROUTE_SHOW = 'setting.show';
    const ROUTE_STORE = 'setting.store';
    const ROUTE_UPDATE = 'setting.update';
    const ROUTE_EDIT = 'setting.edit';
    const ROUTE_DESTROY = 'setting.destroy';
    const ROUTE_UPDATE_PRICES = 'setting.update-prices';

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response|View
     */
    public function index()
    {
        $settings = Setting::query()->get();

        return view('admin.setting.index', [
            'settings' => $settings
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Setting $setting)
    {
        return view('admin.setting.create', [
            'model' => $setting
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Setting $setting)
    {
        $setting->fill($request->all());
        $setting->save();
        \cache()->flush();
        return redirect()->route(self::ROUTE_INDEX);
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Setting $setting)
    {
        return view('admin.setting.edit', [
            'model' => $setting
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Setting $setting)
    {
        $setting->fill($request->all());
        $setting->save();
        \cache()->flush();
        ImportFusionPosFoodsJob::dispatch();
        return redirect()->route(self::ROUTE_INDEX);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Setting $setting)
    {
        $setting->delete();
        \cache()->flush();
        return redirect()->route(self::ROUTE_INDEX);
    }

    public function updatePrices()
    {
        foreach (Pos::query()->get() as $item) {
            FoodProperty::query()->where('mitm_id', $item->mitm_id)->update(['price' => $item->price]);
        }
        return redirect()->route(self::ROUTE_INDEX);
    }
}
