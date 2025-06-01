<?php

namespace App\Http\Controllers;

use App\Mail\AuditRequestSubmitted;
use App\Models\AuditRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class AuditController extends Controller
{
    public function store(Request $request)
    {
        $data = $request->validate([
        'name' => 'required|string|max:255',
        'email' => 'required|email|max:255',
        'website' => 'required|url|max:255',
        'struggle' => 'nullable|string|max:1000',
        ]);

        $audit = AuditRequest::create($data);
        if (!$audit) {
            return redirect()->back()->withErrors(['error' => 'Failed to submit your audit request. Please try again later.']);
        }
        
        Mail::to($audit->email)->send(new AuditRequestSubmitted($audit));
        return redirect()->route('audit')->with('success', 'Your audit request has been submitted successfully. We will review it and get back to you shortly.');
    }
    public function index()
    {
        return Inertia::render('audit', [
            'title' => 'Audit Requests',
            'description' => 'Submit your audit request for our review.',
        ]);
    }
}
