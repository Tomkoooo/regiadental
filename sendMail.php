<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

// Include PHPMailer files
require 'php/PHPMailer.php';
require 'php/SMTP.php';
require 'php/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Read JSON input
$data = json_decode(file_get_contents("php://input"), true);

// Validate required fields
if (!isset($data['name'], $data['email'], $data['date'], $data['treatment'])) {
    echo json_encode(["success" => false, "message" => "Missing required fields"]);
    exit();
}

// Clinic Email
$clinicEmail = "info@regiadental.hu";
$subjectClinic = "Új időpontfoglalás érkezett!";
$messageClinic = "
    <h3>Új foglalás érkezett:</h3>
    <p><b>Név:</b> {$data['name']}</p>
    <p><b>Email:</b> {$data['email']}</p>
    <p><b>Dátum:</b> {$data['date']}</p>
    <p><b>Kezelés:</b> {$data['treatment']}</p>
";

try {
    $mail = new PHPMailer(true);

    // SMTP Configuration
    $mail->isSMTP();
    $mail->Host = 'webmail.forpsi.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'postmaster@regiadental.hu';
    $mail->Password = '4eke7-fus4';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    // Email Settings
    $mail->setFrom('postmaster@regiadental.hu', 'Regia Dental');
    $mail->addAddress($clinicEmail); // Clinic email
    $mail->addReplyTo($data['email'], $data['name']); // Reply to user

    $mail->isHTML(true);
    $mail->Subject = $subjectClinic;
    $mail->Body = $messageClinic;

    // Send Email
    $mail->send();
    echo json_encode(["success" => true, "message" => "Email sent successfully"]);
} catch (Exception $e) {
    echo json_encode(["success" => false, "message" => "Email could not be sent. Error: {$mail->ErrorInfo}"]);
}