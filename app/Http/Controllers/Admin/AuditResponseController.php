<?php

// app/Http/Controllers/Admin/AuditResponseController.php
namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Mail\AuditResponseMail;
use App\Models\AuditRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class AuditResponseController extends Controller
{
    public function respond(Request $request, $id)
{
    $request->validate([
        'message' => 'required|string|max:2000',
        'attachment' => 'nullable|file|max:2048', // 2MB
    ]);

    $audit = AuditRequest::findOrFail($id);
    $attachmentPath = null;

    if ($request->hasFile('attachment')) {
        $attachmentPath = $request->file('attachment')->store('attachments', 'public');
    }

    Mail::to($audit->email)->send(new AuditResponseMail($audit, $request->message, $attachmentPath));

    return response()->json(['message' => 'Response sent']);
}

}
