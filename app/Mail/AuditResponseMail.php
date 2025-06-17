<?php
// app/Mail/AuditResponseMail.php
namespace App\Mail;

use App\Models\AuditRequest;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class AuditResponseMail extends Mailable
{
    use Queueable, SerializesModels;

    public $audit;
    public $responseMessage;
    public $attachmentPath;

    public function __construct(AuditRequest $audit, $responseMessage, $attachmentPath = null)
    {
        $this->audit = $audit;
        $this->responseMessage = $responseMessage;
        $this->attachmentPath = $attachmentPath;
    }

    public function build()
    {
        $mail = $this->subject('Response to Your Audit Request')
                    ->view('emails.audit-response')
                    ->with([
                        'name' => $this->audit->name,
                        'messageContent' => $this->responseMessage,
                    ]);

        if ($this->attachmentPath) {
            $mail->attach(storage_path("app/public/{$this->attachmentPath}"));
        }

        return $mail;
    }

}
