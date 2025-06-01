<?php

use App\Http\Controllers\AuditController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('/about', function () {
    return Inertia::render('about');
})->name('about');

Route::get('/contact', function () {
    return Inertia::render('contact');
})->name('contact');

Route::get('/pricing', function () {
    return Inertia::render('pricing');
})->name('pricing');

Route::get('/audit', [AuditController::class, 'index'])->name('audit');
Route::post('/audit', [AuditController::class, 'store'])->name('audit.store');

Route::get('/privacy', function () {
    return Inertia::render('privacy');
})->name('privacy');
Route::get('/terms', function () {
    return Inertia::render('terms');
})->name('terms');
Route::get('/cookie-policy', function () {
    return Inertia::render('cookie-policy');
})->name('cookie-policy');
Route::get('/help', function () {
    return Inertia::render('help');
})->name('help');
Route::get('/faq', function () {
    return Inertia::render('faq');
})->name('faq');
Route::get('/legal', function () {
    return Inertia::render('legal');
})->name('legal');
Route::get('/legal-notice', function () {
    return Inertia::render('legal-notice');
})->name('legal-notice');
Route::get('/sitemap.xml', function () {
    return response()->view('sitemap', [], 200, ['Content-Type' => 'application/xml']);
})->name('sitemap');
Route::get('/robots.txt', function () {
    return response()->view('robots', [], 200, ['Content-Type' => 'text/plain']);
})->name('robots');
Route::get('/search', function () {
    return Inertia::render('search');
})->name('search');
Route::get('/search/{query}', function ($query) {
    return Inertia::render('search', ['query' => $query]);
})->name('search.query');
Route::get('/terms-of-service', function () {
    return Inertia::render('terms-of-service');
})->name('terms-of-service');
Route::get('/privacy-policy', function () {
    return Inertia::render('privacy-policy');
})->name('privacy-policy');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
