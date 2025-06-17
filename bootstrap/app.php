<?php

use App\Http\Middleware\HandleAppearance;
use App\Http\Middleware\HandleInertiaRequests;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Http\Middleware\AddLinkHeadersForPreloadedAssets;
use App\Http\Middleware\IsAdmin;
use App\Http\Middleware\RedirectIfNotAdmin;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
            $middleware->encryptCookies(except: ['appearance', 'sidebar_state']);

            $middleware->web(append: [
            HandleAppearance::class,
            HandleInertiaRequests::class,
            AddLinkHeadersForPreloadedAssets::class,
        ]);

        // ✅ Register custom route middleware here
        // $middleware->alias([
        //     'is_admin' => IsAdmin::class,
        // ]);

        // Register named middleware alias
        $middleware->alias([
        'admin.auth' => RedirectIfNotAdmin::class,
        ]);
    })
    ->withExceptions(function (Exceptions $exceptions) {
    //
    })->create();
