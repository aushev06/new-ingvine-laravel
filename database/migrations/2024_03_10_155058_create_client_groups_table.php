<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('client_groups', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->boolean('is_default');
            $table->timestamps();
        });

        Schema::create('client_group_discounts', function (Blueprint $table) {
            $table->id();
            $table->integer('transition_threshold_value');
            $table->integer('discount_percent_value');
            $table->timestamps();
            $table->foreignId('client_group_id')->references('id')->on('client_groups')->onDelete('CASCADE');
        });

        Schema::table('ref_user', function (Blueprint $table) {
            $table->foreignId('client_group_id')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('client_group_discounts');
        Schema::dropIfExists('client_groups');
        Schema::dropColumns('ref_user', ['client_group_id']);
    }
};
