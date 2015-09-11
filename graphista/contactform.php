<?php $name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$emailbody="From: $name \n Email: $email \n Message: $message";
$recipient = "jennifer@jenniferpham.biz";
$subject = "Portfolio Website Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $emailbody, $mailheader) or die("Error!");
echo "Thank You for contacting me. I'll answer your message as soon as possible.";
?>