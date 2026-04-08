<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Valoracion extends Model
{
    protected $table = 'valoraciones';

    protected $fillable = [
        'titulo',
        'comentario',
        'puntuacion',
        'centro_id',
    ];

    public function centro()
    {
        return $this->belongsTo(Centro::class);
    }

    public function usuario()
    {
        return $this->belongsTo(User::class, 'usuario_id');
    }
}
