<?php

use App\Http\Controllers\Admin\OrderController as Controller;

/**
 * @var \App\Models\Order\models\OrderViewModel $model
 * @var \App\Models\Cart\models\CartPropertyViewModel $property
 */

?>
@extends('admin.layout.main')

@section('content')
    <div class="content-wrapper">
        <div class="container-fluid">
            <!-- Breadcumbs-->
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <a href="{{route(Controller::ROUTE_INDEX)}}">{{Controller::TITLE}}</a>
                </li>

                <li class="breadcrumb-item active">{{$model->id}}</li>
            </ol>

            <!-- /cards -->
            <h2></h2>

            <div class="box_general padding_bottom">
                <div class="header_box version_2">
                    <h2><i class="fa fa-book"></i>Детали</h2>
                    <div class="float-right">
                        <a class="btn btn-danger"
                           href="{{route(Controller::ROUTE_DESTROY, $model->id)}}" title="Удалить" aria-label="Удалить"
                           data-confirm="Вы уверены, что хотите удалить этот элемент?" data-method="delete"
                           data-redirect="{{route(Controller::ROUTE_INDEX)}}">Удалить</a>


                        <a class="btn btn-success"
                           href="{{route('taxi', $model->id)}}">Заказать такси</a>
                    </div>
                </div>
                <div class="row justify-content-between align-items-center">
                    <div class="col-md-4">
                        <div class="card d-flex justify-content-center align-content-center align-items-center">
                            <div class="text-center" style="font-size: 50px; font-weight: bold;">
                                #{{$model->id}}
                            </div>
                        </div>
                    </div>
                    <div class="col-md-8 add_top_30">
                        <table class="table table-striped table-bordered detail-view">
                            @foreach($model->attributes() as $attribute => $value)
                                <tr>
                                    <th>{{$attribute === $model::ATTR_DELIVERY_COST ? $value . ': "' . $model->city . '"' : $value }}</th>
                                    <td>
                                        @if($attribute === $model::ATTR_CITY)
                                            {{$model->city ? $model->$attribute : 'Пользователь не выбрал район'}}
                                        @elseif($attribute === $model::ATTR_PHONE)
                                            {{$model->phone}}
{{--                                            <a href="tel:+{{$model->phone}}">+{{$model->phone}}</a>--}}

                                        @elseif($attribute === $model::ATTR_STATE)
                                            <select name="state" id="state" class="form-control">
                                               @foreach(\App\Models\Order\Order::getStateTypes() as $key => $v)
                                                    <option {{$model->state === $v ? 'selected' : ''}} value="{{$key}}">{{$v}}</option>
                                               @endforeach
                                            </select>
                                        @else
                                            {{$model->$attribute}}
                                        @endif
                                    </td>
                                </tr>
                            @endforeach
                                <tr>
                                    <th>Общая стоимость</th>
                                    <td><b>{{$model->total + $model->delivery_cost}}</b></td>
                                </tr>
                        </table>
                    </div>
                </div>

                <table class="table table-striped table-bordered detail-view">
                    <thead>
                    <tr>
                        <td>Картинка</td>
                        <td>Название</td>
                        <td>Количество</td>
                        <td>Сумма</td>
                    </tr>
                    </thead>

                    <tbody>
                    @foreach($model->foodProperties ?? [] as $property)
                        <tr class="text-center">
                            <td><img src="{{$property->img}}" class="img-thumbnail" width="150"></td>
                            <td>
                                {{$property->name}}
                                @foreach($property->options as $option)
                                    <div>
                                        {{$option->name}} x {{$option->quantity}}
                                    </div>
                                @endforeach
                            </td>
                            <td>{{$property->quantity}}</td>
                            <td>{{$property->sum}}</td>
                        </tr>
                    @endforeach
                    <tr class="text-center">
                        <td></td>
                        <td></td>
                        <td class="text-right">Итого: </td>
                        <td><b><?= collect($model->foodProperties)->sum('sum') ?></b></td>
                    </tr>
                    </tbody>
                </table>
            </div>

        </div>
        <!-- /.container-fluid-->
    </div>
@endsection

<script>
    document.addEventListener('DOMContentLoaded', function() {
        $("#state").on('change', function (e) {
            fetch('/admin/order/{{$model->id}}/set-status/' + e.target.value)
                .then(r => {
                    alert('Статус обновлен!')
                });
        });
    })
</script>



