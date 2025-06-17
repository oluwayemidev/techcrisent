<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use Inertia\Response;

class AdminController
{
    public function index(): Response
    {
        return Inertia::render('admin/admin-dashboard');
    }
}
