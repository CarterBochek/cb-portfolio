<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['your-message'];
    $to = 'carterabochek@gmail.com'; //The email you want the form to send to

    // Set email headers
    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=utf-8\r\n";

    // Send the email
    mail($to, 'Contact Form Submission', $message, $headers);

    // Redirect the user to a success page
    header("Location: thank_you.html");
    exit();
}
?>