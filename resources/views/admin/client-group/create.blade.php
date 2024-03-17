<?php

use App\Http\Controllers\Admin\ClientGroupController as Controller;

?>
@extends('admin.layout.main')

@section('content')
    <div class="content-wrapper">
        <div class="box_general padding_bottom">
            <div class="header_box version_2">
                <h2><i class="fa fa-cutlery" aria-hidden="true"></i>Добавление купона</h2>
            </div>
            <form action="{{route(Controller::ROUTE_STORE)}}" method="POST" enctype="multipart/form-data">
                @csrf
                @component('admin.client-group._form')@endcomponent
                <button class="btn btn-success">Создать</button>
            </form>
        </div>


    </div>
@endsection
