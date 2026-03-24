<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('beneficio_curso', function (Blueprint $table) {
            $table->id();
            $table->foreignId('beneficio_id')->constrained('beneficios');
            $table->foreignId('curso_id')->constrained('cursos');
            $table->timestamps(); 
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('beneficio_curso');
    }
};
