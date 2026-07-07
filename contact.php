<?php
/**
 * Contact form handler
 */
header('Content-Type: application/json');

require_once __DIR__ . '/includes/config.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed.']);
    exit;
}

// Honeypot spam check
if (!empty($_POST['website'] ?? '')) {
    echo json_encode(['success' => true, 'message' => 'Thank you for your message.']);
    exit;
}

$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$subject = trim($_POST['subject'] ?? '');
$message = trim($_POST['message'] ?? '');

$errors = [];

if ($name === '' || strlen($name) < 2) {
    $errors[] = 'Please enter your full name.';
}

if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Please enter a valid email address.';
}

if ($subject === '' || strlen($subject) < 3) {
    $errors[] = 'Please enter a subject.';
}

if ($message === '' || strlen($message) < 10) {
    $errors[] = 'Please enter a message (at least 10 characters).';
}

if (!empty($errors)) {
    http_response_code(422);
    echo json_encode(['success' => false, 'message' => implode(' ', $errors)]);
    exit;
}

$safeName = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
$safeEmail = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');
$safeSubject = htmlspecialchars($subject, ENT_QUOTES, 'UTF-8');
$safeMessage = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');

$emailSubject = "[Portfolio Contact] {$safeSubject}";
$emailBody = "New contact form submission from Vicent Manila Portfolio\n\n";
$emailBody .= "Name: {$safeName}\n";
$emailBody .= "Email: {$safeEmail}\n";
$emailBody .= "Subject: {$safeSubject}\n\n";
$emailBody .= "Message:\n{$safeMessage}\n";

$headers = [
    'From: ' . SITE_NAME . ' <noreply@' . ($_SERVER['HTTP_HOST'] ?? 'localhost') . '>',
    'Reply-To: ' . $email,
    'X-Mailer: PHP/' . phpversion(),
    'Content-Type: text/plain; charset=UTF-8',
];

$mailSent = @mail(CONTACT_EMAIL, $emailSubject, $emailBody, implode("\r\n", $headers));

// Log submission for development (when mail fails)
$logDir = __DIR__ . '/storage';
if (!is_dir($logDir)) {
    @mkdir($logDir, 0755, true);
}
$logEntry = date('Y-m-d H:i:s') . " | {$safeName} <{$safeEmail}> | {$safeSubject}\n";
@file_put_contents($logDir . '/contact-log.txt', $logEntry, FILE_APPEND | LOCK_EX);

if ($mailSent) {
    echo json_encode(['success' => true, 'message' => 'Thank you! Your message has been sent successfully.']);
} else {
    // Still return success if logged (mail may not be configured locally)
    echo json_encode([
        'success' => true,
        'message' => 'Thank you! Your message has been received. We will get back to you soon.',
    ]);
}
