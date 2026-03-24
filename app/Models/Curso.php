<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Curso extends Model
{
    protected $fillable = ['titulo', 'descripcion','imagen','video'];

    public function beneficios()
    {
        return $this->belongsToMany(Beneficio::class);
    }
}
