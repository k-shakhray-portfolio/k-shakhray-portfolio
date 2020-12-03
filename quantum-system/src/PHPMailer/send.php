<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/Exception.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->isHTML(true);

$mail->setFrom('test-test-test@gmail.com', 'Test');
$mail->addAddress('neoadeo@gmail.com');
$mail->Subject = 'Just test';

$body = $_POST['firstname'];

$mail->Body = $body;

if(!$mail->send()) {
    $message = 'OK';
} else {
    $message = 'NotOK'
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);