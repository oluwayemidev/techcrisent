<?php

use App\Http\Controllers\Admin\ActivityLogController;
use App\Http\Controllers\Admin\AdminAuthController;
use App\Http\Controllers\Admin\AuditResponseController;
use App\Http\Controllers\Admin\ToolController;
use App\Http\Controllers\AuditController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\Auth\LoginController;
use App\Http\Controllers\Admin\BlogController;
use App\Http\Controllers\Admin\ClientController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\InvoiceController;
use App\Http\Controllers\Admin\LeadController;
use App\Http\Controllers\Admin\ProjectController;
use App\Http\Controllers\Admin\SettingsController;
use App\Http\Controllers\Admin\TeamController;
use App\Http\Controllers\SupportController;
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

// User Dashboard
Route::middleware(['auth'])->group(function (){
    Route::get('/dashboard', fn() => inertia('dashboard'))-> name('dashboard');
});

// Admin dashboard (authenticated)
// Route::middleware(['auth', 'is_admin'])->group(function () {
//     Route::get('/admin', [AdminController::class, 'index'])->name('admin.dashboard');
// });

Route::prefix('admin')->group(function () {
    Route::name('admin.')->middleware(['admin.auth'])->group(function () {
        Route::get('/', [DashboardController::class, 'index'])->name('dashboard');
        Route::get('/clients', [ClientController::class, 'index'])->name('clients');
        Route::get('/projects', [ProjectController::class, 'index'])->name('projects');
        Route::get('/leads', [LeadController::class, 'index'])->name('leads');
        Route::get('/invoices', [InvoiceController::class, 'index'])->name('invoices');
        Route::get('/team', [TeamController::class, 'index'])->name('team');
        Route::get('/blog', [BlogController::class, 'index'])->name('blog');
        Route::get('/settings', [SettingsController::class, 'index'])->name('settings');
        Route::get('/tools', [ToolController::class, 'index'])->name('tools');
        Route::get('/activity', [ActivityLogController::class, 'index'])->name('activity');
        Route::get('/support', [SupportController::class, 'index'])->name('support');
        Route::post('/logout', [AdminAuthController::class, 'logout'])->name('logout');
        Route::post('/audits/{id}/respond', [AuditResponseController::class,
        'respond'])->name('admin.audits.respond');

    });

    Route::get('/login', [LoginController::class, 'showLoginForm'])->name('admin.login');
    Route::post('/login', [LoginController::class, 'login'])->name('admin.login.submit');
    Route::post('/logout', [LoginController::class, 'logout'])->name('admin.logout');

    Route::middleware('admin.auth')->group(function () {
        Route::get('/dashboard', fn () => Inertia::render('admin/dashboard'))->name('admin.dashboard');
    });
});



require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
