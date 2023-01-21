<?php
/**
 * @var \App\Models\Category\Category $category
 */

?>

@extends('admin.layout.main')

@section('content')
    <div class="content-wrapper">
        <div class="container-fluid">
            <!-- Breadcumbs-->
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <a href="{{route('admin.index')}}">Доска</a>
                </li>
                <li class="breadcrumb-item active">Категории</li>
            </ol>

            <!-- /cards -->
            <h2></h2>
            <div class="box_general padding_bottom">
                <div class="header_box version_2">
                    <h2><i class="fa fa-fw fa-list"></i>Категории</h2>
                    <div class="pull-right">
                        <a href="{{route('categories.create')}}" class="btn badge-primary">Добавить</a>
                    </div>
                </div>

                <div class="categories">
                    <table class="table">
                        <thead>
                        <tr>
                            <td>

                            </td>
                            <th>#</th>
                            <th>Название</th>
                            <th>Действие</th>
                        </tr>

                        </thead>

                        <tbody id="sortable">
                        @foreach($categories as $category)
                            @include('admin.category.categories', [$category, 'name' => ''])
                        @endforeach

                        </tbody>
                    </table>
                    {{$categories->links()}}
                </div>

            </div>
        </div>
        <!-- /.container-fluid-->
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function () {
            $("#sortable").sortable({
                stop: function (evt, ui) {
                    let blocks = [];
                    $("#sortable > tr").each((key, item) => {
                        blocks.push({position: key, id: $(item).attr('data-id')})
                    });

                    $.ajax({
                        url: "/api/categories/set-position",
                        type: "POST",
                        data: {blocks: blocks},
                        success: function () {
                            // location.reload();
                        }
                    })
                }
            });
            $("#sortable").disableSelection();
        })
    </script>

@endsection



