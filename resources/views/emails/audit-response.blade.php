<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Audit Request Confirmation</title>
    <style>
        body {
            font-family: 'Segoe UI', sans-serif;
            background-color: #f4f4f7;
            color: #333;
            margin: 0;
            padding: 0;
        }

        .email-container {
            max-width: 600px;
            margin: 40px auto;
            background: #fff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
        }

        .email-header {
            background-color: #0f172a;
            color: #fff;
            text-align: center;
            padding: 30px 20px;
        }

        .email-header img {
            max-width: 120px;
            margin-bottom: 10px;
        }

        .email-body {
            padding: 30px 20px;
        }

        h2 {
            color: #0f172a;
        }

        ul {
            list-style: none;
            padding-left: 0;
        }

        li {
            margin: 10px 0;
        }

        strong {
            color: #0f172a;
        }

        .footer {
            text-align: center;
            font-size: 13px;
            color: #aaa;
            padding: 20px;
            border-top: 1px solid #eaeaea;
            background-color: #f9f9f9;
        }
    </style>
</head>

<body>
    <div class="email-container">
        <div class="email-header">
            <img src="https://crisent.com/favicon.png" width="60px" alt="Crisent Tech Logo">
            <h1>Crisent Tech</h1>
        </div>
        <div class="email-body">
            <p>Hi {{ $name }},</p>

            <p>Thanks for submitting your audit request. Here’s our response:</p>

            <p>{{ $messageContent }}</p>

            <p>Best regards,
            <p>– The Crisent Tech Team</p>

            <div class="footer">
                &copy; {{ date('Y') }} Crisent Tech. All rights reserved.
            </div>
        </div>
</body>

</html>
