<?php

//check for header injection
    function has_header_injection($str){
        return preg_match( */[\r\n]/ *, $str);
    }

    if (isset ($_POST['contact_submit'])){

        $name = trim($_POST['name']);
        $email = trim($_POST['email']);
        $msg = $_POST['message];

//    Check to see if $name or $email have header injections
        if (has_header_injection($name) || has_header_injection($email)){
            die();  //if true, kill the script
        }

    if (!$name || !$email || !$msg){ //if any of these fields are empty
        echo '<h4 class="error">All fields required.</h4><a href="contact.php" class="button block">Go back and try again</a>';
        exit;
    }

//    Add the recipient email to a variable
    $to = "j.pham87@gmail.com";
    $subject = "$name sent you message on Portfolio Website";
//    construct the message of email
    $message = "Name: $name\r\n";  //  \r\n is a line break
    $message .= "Email: $email\r\n";  // period means concatenate
    $message .="Message:]r]n$msg";

//    if the subscribe checkbox was checked...
    if (isset($_POST['subscribe']) && $_POST['subscribe'] =='Subscribe'){  //if post subscribe was sent and the value of it is subscribe

//    Addd new line to message
        $message .= "\r\n\r\nPlease add $email to the mailing list.\r\n";
    }
    $message = wordwrap($message, 72);  //wrap to 72 characters per line

//    Set the mail headers into a variable
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/plain; charset=iso-8859-1\r\n";
    $headers .= "FROM: $name <$email> \r\n";
    $headers .= "X-Priority: 1\r\n";  //set priority of the mail
    $headers .= "X-MSMail-Priority: High\r\n\r\n";

//    Send the email
    mail($to, $subject, $message, $headers);
?>
//show succcess message after email has sent
<h5> Thanks for contacting Jennifer Pham</h5>
<p> Please allow 24 hours for a response</p>
<p><a href="/final" class="button block"> GO to home page</a>
<?php } else { ?>

Form
<?php } ?>

--------------


<?php
 
if(isset($_POST['email'])) {
 
     
 
    // EDIT THE 2 LINES BELOW AS REQUIRED
 
    $email_to = "j.pham87@gmail.com";
    $email_subject = "Contact from jenniferpham.biz";

    function died($error) {
        // your error code can go here
        echo "We are very sorry, but there were error(s) found with the form you submitted. ";
        echo "These errors appear below.<br /><br />";
        echo $error."<br /><br />";
        echo "Please go back and fix these errors.<br /><br />";
        die();
    }

    // validation expected data exists
 
    if(!isset($_POST['name']) ||
        !isset($_POST['email']) ||
        !isset($_POST['phone']) ||
        !isset($_POST['message'])) {
        died('We are sorry, but there appears to be a problem with the form you submitted.');
    }
 
    $name = $_POST['name']; // required
    $email_from = $_POST['email']; // required
    $phone = $_POST['phone']; // not required
    $message = $_POST['message']; // required

    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
 
  if(!preg_match($email_exp,$email_from)) {
    $error_message .= 'The Email Address you entered does not appear to be valid.<br />';
  }
 
    $string_exp = "/^[A-Za-z .'-]+$/";
 
  if(!preg_match($string_exp,$name)) {
    $error_message .= 'The name you entered does not appear to be valid.<br />';
  }
 
  if(strlen($message) < 2) {
    $error_message .= 'The message you entered do not appear to be valid.<br />';
  }
 
  if(strlen($error_message) > 0) {
    died($error_message);
  }
 
    $email_message = "Form details below.\n\n";

    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }
 
     
 
    $email_message .= "Name: ".clean_string($name)."\n";
    $email_message .= "Email: ".clean_string($email_from)."\n";
    $email_message .= "Phone: ".clean_string($phone)."\n";
    $email_message .= "Message: ".clean_string($message)."\n";
 
// create email headers
 
$headers = 'From: '.$email_from."\r\n".
 
'Reply-To: '.$email_from."\r\n" .
 
'X-Mailer: PHP/' . phpversion();
 
@mail($email_to, $email_subject, $email_message, $headers);  
 
?>
 
 
 
<!-- include your own success html here -->
 
Thank you for contacting me. I love hearing from people, and I will be in touch with you soon.
 
 
 
<?php
 
}
 
?>