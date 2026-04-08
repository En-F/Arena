<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Centro extends Model
{
    protected $fillable = [
        'nombre',
        'telefono',
        'email',
        'descripcion',
        'imagen',
        'ubicacion',
    ];

    public function valoraciones()
    {
        return $this->hasMany(Valoracion::class);
    }
}
