<?php


if( $_POST) {
    print_r($_POST);
}

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;


require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/SMTP.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->isHTML(true);
$mail->isSMTP(true);

$mail->Host = 'smtp.mail.ru';
$mail->SMTPAuth = true;
$mail->Username = 'mailtest00@bk.ru';
$mail->Password = 'Пароль не дам';
$mail->SMTPSecure = 'ssl';
$mail->Port = '465';

$mail->From = 'mailtest00@bk.ru';
$mail->FromName = 'Тест';
$mail->addAddress('neoadeo@gmail.com');
$mail->addAddress('usersnamers@gmail.com');


$name = $_POST['firstname'];
$usermail = $_POST['email'];


$mail->Subject = 'Тестовый заголовок';
$mail->Body = 'Имя: ' .$name .'. Почта: ' .$usermail;
$mail->AltBody = 'ERROR';

    if ($mail->send()) {
        echo 'Доставлено!';
    } else {
        echo 'Ah shit, here we go again';
    }