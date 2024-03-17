<?php

/**
 * @var \App\Models\ClientGroup $model
 */
?>
<div class="row">

    <div class="col-md-12">
        @if ($errors->any())

            <div class="alert alert-danger">

                <ul>

                    @foreach ($errors->all() as $error)

                        <li>{{ $error }}</li>

                    @endforeach

                </ul>

            </div>

        @endif
    </div>

    <div class="col-md-12">
        <div class="form-group">
            <label for="">Название группы</label>
            <input type="text" name="name" class="form-control" placeholder="Название"
                   value="{{old('name', $model->name ?? '')}}">
        </div>

        <div class="form-group">
            <label for="">Группа поумолчанию</label>
            <input type="checkbox" name="is_default" class="form-control"
                   placeholder="Поумолчанию" @checked(old('is_default', $model->is_default))>
        </div>


        <div id="react-steps" data-steps='@json($model->steps ?? [])'></div>

    </div>


</div>

