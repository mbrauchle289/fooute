<?php

if(isset($_POST["submit"])){
    $name = $_POST["name"];
    $firma = $_POST["firma"];
    $telefon = $_POST["telefon"];
    $mailFrom = $_POST["mail"];
    $nachricht = $_POST["nachricht"];

    $mailTo = "Fooute.test@web.de";
    $headers = "From:".$mailFrom;
    $text = "Du hast eine Mail von ".$name." bekommen.\n\n".$nachricht;
   
    mail($mailTo,"Kontaktaufnahme fooute",$nachricht,$headers);
    header("Location:contact.html?mailsend")
}








?>