<?php

$recepient = "cps.komi@mail.ru";
$sitename = "www.cps-komi.ru";

$name = trim($_POST["user-name"]);
$phone = trim($_POST["user-tel"]);
$email = trim($_POST["user-email"]);
$text = trim($_POST["user-text"]);
$message = "Имя: $name \nТелефон: $phone \nEmail: $email \nТекст: $text";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=utf-8");