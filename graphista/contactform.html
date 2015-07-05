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

<form id="contact-form" class="col-sm-6 col-md-offset-1 scrollimation fade-left d3" action="" method="post" novalidate>

    <div class="form-group">
        <label class="control-label" for="name">Name</label>
        <div class="controls">
            <input id="name" name="name" placeholder="Your name" class="form-control requiredField" data-new-placeholder="Your name" type="text" data-error-empty="Please enter your name">
            <i class="fa fa-user"></i>
        </div>
    </div><!-- End name input -->

    <div class="form-group">
        <label class="control-label" for="email">Email</label>
        <div class=" controls">
            <input id="email" name="email" placeholder="Your email" class="form-control requiredField" data-new-placeholder="Your email" type="email" data-error-empty="Please enter your email" data-error-invalid="Invalid email address">
            <i class="fa fa-envelope"></i>
        </div>
    </div><!-- End email input -->

    <div class="form-group">
        <label class="control-label" for="phone">Phone</label>
        <div class=" controls">
            <input id="phone" name="phone" placeholder="Your phone number (optional)" class="form-control" data-new-placeholder="Your phone number" type="text" data-error-empty="Please enter your phone number" data-error-invalid="Invalid phone number">
            <i class="fa fa-envelope"></i>
        </div>
    </div><!-- End email input -->

    <div class="form-group">
        <label class="control-label" for="message">Message</label>
        <div class="controls">
            <textarea id="message" name="message"  placeholder="Your message" class="form-control requiredField" data-new-placeholder="Your message" rows="6" data-error-empty="Please enter your message"></textarea>
            <i class="fa fa-comment"></i>
        </div>
    </div><!-- End textarea -->

    <p><button name="submit" type="submit" class="btn btn-color2 btn-block" data-error-message="Error!" data-sending-message="Sending..." data-ok-message="Message Sent"><i class="fa fa-paper-plane"></i>Send Message</button></p>
    <input type="hidden" name="submitted" id="submitted" value="true" />

</form><!-- End contact-form -->