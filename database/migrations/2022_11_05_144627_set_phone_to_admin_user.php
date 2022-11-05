<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('ref_user', function (Blueprint $table) {
            \Illuminate\Support\Facades\DB::statement(`UPDATE ref_user SET phone='89780438740' WHERE email='admin@admin.ru'`);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('ref_user', function (Blueprint $table) {
            //
        });
    }
};
