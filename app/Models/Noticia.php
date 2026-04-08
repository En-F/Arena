<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Noticia extends Model
{
    protected $fillable = [
        'titulo',
        'contenido',
        'imagen',
        'autor_id',
    ];

    public function autor()
    {
        return $this->belongsTo(User::class, 'autor_id');
    }
}
