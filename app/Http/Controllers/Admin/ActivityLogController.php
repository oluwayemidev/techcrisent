<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\AuditRequest;

class ActivityLogController extends Controller
{
    public function index(){
        $audits = AuditRequest::latest()->get(); // You can paginate if needed
        return Inertia::render('admin/activity', [
        'audits' => $audits,
        ]);
    }
}
