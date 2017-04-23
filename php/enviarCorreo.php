<?php


$mail = $_REQUEST["mensaje"];
//Titulo
$titulo = $_REQUEST["asunto"];
//cabecera
$headers = "MIME-Version: 1.0\r\n"; 
$headers .= "Content-type: text/html; charset=iso-8859-1\r\n"; 
//dirección del remitente 
$headers .= "From: ".$_REQUEST["nombre"]." < ".$_REQUEST["email"]." >\r\n";
//Enviamos el mensaje a tu_dirección_email 
$bool = mail($_REQUEST["email"],$titulo,$mail,$headers);
if($bool){
    echo "ok";
}else{
    echo "Mensaje no enviado";
}

?>