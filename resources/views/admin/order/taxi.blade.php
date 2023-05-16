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
        </div>
    </div>
@endsection
