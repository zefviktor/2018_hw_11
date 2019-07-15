<?php

$name = $_POST['name'];
$email = $_POST['email'];
$number = $_POST['number'];
$website = $_POST['website'];
$message = $_POST['message'];


$name = htmlspecialchars($name);
$email = htmlspecialchars($email);
$number = htmlspecialchars($number);
$website = htmlspecialchars($website);
$message =htmlspecialchars($message);

$name = urldecode($name);
$email = urldecode($email);
$number = urldecode($number);
$website = urldecode($website);
$message =urldecode($message);

$name = trim($name);
$email = trim($email);
$number = trim($number);
$website = trim($website);
$message =trim($message);

//echo $name;
//echo "<br>";
//echo $email;
if (mail("zefviktor@gmail.com", "Заявка с сайта", "ФИО:".$name.". E-mail: ".$email ,"From:  info@zefviktor.github.io \r\n"))
 {     echo "good work)";
} else {
    echo "error 404";
}?>


