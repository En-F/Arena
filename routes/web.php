<?php

use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home/Home', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

Route::get('/centros-y-tarifas', function () {
    return Inertia::render('centrosytarifas/centrosytarifas');
})->name('centros.tarifas');


Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
    
    require __DIR__.'/settings.php';
});


require __DIR__.'/settings.php';
