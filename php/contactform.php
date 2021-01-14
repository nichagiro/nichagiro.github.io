<?php 

$name = $_POST['name'];
$email =  $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

if($name != '' && $email != '' && $subject != '' && $message != ''){   

    $to = 'nichagiro@gmail.com';
    $subject = "Correo nichagiro.github.io";
    $message =  "Mensaje: $message";
    $headers = "From:".$name.' <'.$email.'>';
    
    mail($to, $subject, $message, $headers);

    echo json_encode('OK');

} else {

    echo json_encode('ERROR');

}