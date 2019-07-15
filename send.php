<?php

<label for="name" hidden="hidden">name</label>
<input type="text" id="name" name="name" class="form__input form__input-text" placeholder="Name*" required>

<label for="email" hidden="hidden">email</label>
<input type="text" id="email" name="email" class="form__input form__input-text" placeholder="E-mail*" required>

<label for="number" hidden="hidden">number</label>
<input type="tel" id="number" name="number" class="form__input form__input-text" placeholder="Telephone*" required>

<label for="website" hidden="hidden">website</label>
<input type="text" id="website" name="website" class="form__input form__input-text" placeholder="Website" required>

<label for="message" hidden="hidden">message</label>
<textarea id="message" name="message" class="form__input form__input-textarea" placeholder="Message" required></textarea>

<input type="submit" class="form__input-submit" name="submit" value="Submit">


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

echo $name;
echo "<br>";
echo $email;
if (mail("zefviktor@gmail.com", "Заявка с сайта", "ФИО:".$name.". E-mail: ".$email ,"From:  info@zefviktor.github.io/2018_hw_11 \r\n"))
 {     echo "good work)";
} else {
    echo "error 404";
}?>


