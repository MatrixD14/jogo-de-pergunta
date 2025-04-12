<?php
include("dados.php");

$nome = $_POST['Nome'];

$smtp = $con->prepare("INSERT INTO dados(nome) VALUES (?)");
$smtp->bind_param("s", $nome);

if ($smtp->execute()) {
  echo "";
} else {
  echo "erro no envio: " . $smtp->error;
}
$smtp->close();
$con->close();
