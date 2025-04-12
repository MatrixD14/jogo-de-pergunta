<?php
$serve = "192.168.18.27";
$usuari = "root";
$senha = "root";
$DB = "Primeirodb";
/*
$serve = "localhost";
$usuari = "root";
$senha = "";
$DB = "primeirodb";
*/
$form = "
<h1>Agora você esta logado</h1>
<button>inicia jogo</button>
";
$con = mysqli_connect($serve, $usuari, $senha, $DB);
?>
<!DOCTYPE html>
<html lang="pt-br">
</head>
<style>
   body {
      width: 100%;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: Arial;
      padding: center;
      font-size: 30px;
   }

   div {
      max-width: 700px;
      height: 300px;
      border: 1px solid black;
      border-radius: 20px;
      padding: 30px;
      background: white;
      align-items: center;
   }

   h1 {
      background: -webkit-linear-gradient(10deg, yellow, blue 50%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
   }

   button {
      margin-top: 10px;
      width: 100%;
      background: black;
      text-align: center;
      padding: 20px;
      color: white;
      border-radius: 20px;
      font-size: 20px;
   }
</style>
</head>

<body>
   <div>
      <?php
      if ($con->connect_errno) {
         exit("falha na conexao com o banco");
      } else {
         echo "$form";
      }
      ?>
   </div>
   <script>
      var but = document.querySelector('button');
      but.addEventListener('click', () => {
         window.location.href = "menu/menujogo.html";
      });
   </script>
</body>

</html>