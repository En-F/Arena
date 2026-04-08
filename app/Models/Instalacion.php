<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Instalacion extends Model
{
    protected $table = 'instalaciones';
    protected $fillable = [
        'nombre',
        'imagen',
    ];
}
