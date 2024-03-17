<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\ClientGroupRequest;
use App\Http\Requests\Options\CategoryOptionRequest;
use App\Models\ClientGroup;
use App\Models\Coupon\Coupon;
use App\Services\ClientGroup\ClientGroupService;
use Illuminate\Http\Request;

class ClientGroupController extends Controller
{
    public function __construct(private ClientGroup $model, private ClientGroupService $service)
    {
    }

    const TITLE = "Накопительная система";


    const ROUTE_INDEX = 'client-group.index';
    const ROUTE_CREATE = 'client-group.create';
    const ROUTE_SHOW = 'client-group.show';
    const ROUTE_STORE = 'client-group.store';
    const ROUTE_UPDATE = 'client-group.update';
    const ROUTE_EDIT = 'client-group.edit';
    const ROUTE_DESTROY = 'client-group.destroy';


    public function index()
    {
        $data = ClientGroup::paginate(15);
        return view('admin.client-group.index', [
            'data' => $data
        ]);
    }


    public function create()
    {
        return view('admin.client-group.create');
    }


    public function store(ClientGroupRequest $request)
    {
        $model = $this->service->save($request, new ClientGroup());

        return redirect()->route('client-group.show', $model->id);
    }


    public function show($id)
    {
        $model = $this->model::findOrFail($id);

        return view('admin.client-group.show', ['model' => $model]);
    }


    public function edit($id)
    {
        $model = $this->model::findOrFail($id);

        return view('admin.client-group.edit', ['model' => $model]);
    }


    public function update(ClientGroupRequest $request, $id)
    {
        $this->model = $this->model::findOrFail($id);
        $model = $this->service->save($request, $this->model);

        return redirect()->route('client-group.edit', $id);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $this->model::findOrFail($id)->delete();
        return redirect()->route('client-group.index');
    }

}
