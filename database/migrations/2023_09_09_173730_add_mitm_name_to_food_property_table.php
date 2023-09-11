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
        Schema::table('food_properties', function (Blueprint $table) {
            $table->engine = "InnoDB";
            $table->string("mitm_name")->nullable();
            $table->string("mitm_id")->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('food_properties', function (Blueprint $table) {
            $table->dropColumn('mitm_name');
            $table->dropColumn('mitm_id');
        });
    }
};
