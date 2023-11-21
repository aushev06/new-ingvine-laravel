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
        Schema::create('payments', function (Blueprint $table) {
            $table->id();
            $table->string('username');
            $table->string('password');
            $table->string('order_number');
            $table->float('amount');
            $table->string('phone');
            $table->string('status')->default('new');
            $table->string('form_url')->nullable();
            $table->string('error_code')->nullable();
            $table->string('error_message')->nullable();
            $table->foreignId('user_id')->nullable();
            $table->uuid('uuid');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('payments');
    }
};
