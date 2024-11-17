<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Formulário de Contato PHP</title>

</head>
<body>
    <?php
    $nome = $email = $mensagem = '';
    $nomeErr = $emailErr = $mensagemErr = '';

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Validando o nome
        if (empty($_POST["nome"])) {
            $nomeErr = "O nome é obrigatório.";
        } else {
            $nome = test_input($_POST["nome"]);
        }

        // Validando o e-mail
        if (empty($_POST["email"])) {
            $emailErr = "O e-mail é obrigatório.";
        } else {
            $email = test_input($_POST["email"]);
            if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                $emailErr = "Formato de e-mail inválido.";
            }
        }

        // Validando a mensagem
        if (empty($_POST["mensagem"])) {
            $mensagemErr = "A mensagem é obrigatória.";
        } else {
            $mensagem = test_input($_POST["mensagem"]);
        }
    }

    function test_input($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }
    ?>

    <h2>Formulário de Contato</h2>
    <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
        Nome: <input type="text" name="nome">
        <span class="error"><?php echo $nomeErr;?></span>
        <br><br>
        E-mail: <input type="text" name="email">
        <span class="error"><?php echo $emailErr;?></span>
        <br><br>
        Mensagem: <textarea name="mensagem" rows="5" cols="40"></textarea>
        <span class="error"><?php echo $mensagemErr;?></span>
        <br><br>
        <input type="submit" name="submit" value="Enviar">
    </form>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST" && empty($nomeErr) && empty($emailErr) && empty($mensagemErr)) {
        echo "<h2>Dados enviados com sucesso:</h2>";
        echo "Nome: " . $nome . "<br>";
        echo "E-mail: " . $email . "<br>";
        echo "Mensagem: " . $mensagem . "<br>";
    }
    ?>
</body>
</html>
