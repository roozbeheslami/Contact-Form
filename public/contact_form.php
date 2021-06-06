<?php
    $name = $_POST['name'];
    $from = $_POST['email'];
    $message = $_POST['message'];
    $useragent = $_POST['useragent'];

    $to = 'test@email.com'; // PUT YOUR EMAIL HERE
    $subject = $name;
    $txt = $message." / ".$useragent;
    $headers = 'From: '.$from;

    mail($to,$subject,$txt,$headers);

    header("Location: /contact")

?>