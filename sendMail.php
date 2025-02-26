<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

// Read JSON input
$data = json_decode(file_get_contents("php://input"), true);

// Validate required fields
if (!isset($data['name'], $data['email'], $data['date'], $data['treatment'])) {
    echo json_encode(["success" => false, "message" => "Missing required fields"]);
    exit();
}

// Clinic Email
$clinicEmail = "yourclinic@example.com"; //ITT IDE JÖN AZ EMAIL CÍME A FOGÁSZATNAK
$subjectClinic = "Új időpontfoglalás érkezett!";
$messageClinic = "
    <h3>Új foglalás érkezett:</h3>
    <p><b>Név:</b> {$data['name']}</p>
    <p><b>Email:</b> {$data['email']}</p>
    <p><b>Dátum:</b> {$data['date']}</p>
    <p><b>Kezelés:</b> {$data['treatment']}</p>
    <p><b>Típus:</b> {$data['type']}</p>
    " . ($data['type'] === 'körzeti' ? "<p><b>Körzet:</b> {$data['district']}</p>" : "") . "
    <p><b>Üzenet:</b> {$data['message']}</p>";

// Client Email
$subjectClient = "Időpontfoglalás megerősítése";
$messageClient = "
    <h3>Kedves {$data['name']},</h3>
    <p>Az alábbi időpontot foglalta le nálunk:</p>
    <p><b>Dátum:</b> {$data['date']}</p>
    <p><b>Kezelés:</b> {$data['treatment']}</p>
    <p><b>Rendelő típusa:</b> {$data['type']}</p>
    <p>Köszönjük, hogy minket választott!</p>
";

// Mail headers
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8" . "\r\n";
$headers .= "From: Kerámia Dental <no-reply@keramiadental.hu>" . "\r\n";

// Send emails
$mailToClinic = mail($clinicEmail, $subjectClinic, $messageClinic, $headers);
$mailToClient = mail($data['email'], $subjectClient, $messageClient, $headers);

// Response
if ($mailToClinic && $mailToClient) {
    echo json_encode(["success" => true, "message" => "Emails sent successfully"]);
} else {
    echo json_encode(["success" => false, "message" => "Failed to send emails"]);
}
?>
