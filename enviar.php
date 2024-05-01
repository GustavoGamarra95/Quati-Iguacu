<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recebe dados</title>
</head>
<body>
<?php

$Servidor = "200.195.171.122";
$Usuario = "hackatur";
$Senha = "Qle6nCJoMwM3cE21";
$NomeBancoDeDados = "hackatur";

// Criar conexão
$conexao = mysqli_connect($Servidor, $Usuario, $Senha, $NomeBancoDeDados);

// Checar conexão
if (!$conexao) {
    echo "Nao conectado";
}
echo "Conectado ao banco";

if (isset($_POST['Email']) || isset($_POST['Senha'])) {
    $Email = $_POST['Email'];
    $Email = mysqli_real_escape_string($conexao, $Email);
    $Senha = $_POST['Senha'];

    $sql = "SELECT Email from hackatur.CadastroUsuario where Email='$Email'";
    $retorno = mysqli_query($conexao, $sql);

    if (mysqli_num_rows($retorno) > 0) {
        echo "Email ja Cadastrado!<br>";
        echo"<a href='Cadastro.html'> voltar </a>";
    } else {
        $sql = "INSERT INTO hackatur.CadastroUsuario (Email, Senha) VALUES ('$Email', '$Senha')";
        $resultado = mysqli_query($conexao, $sql);

        echo "Usuario cadastrado com sucesso!<br>";
        echo"<a href='Cadastro.html'> voltar </a>";
    }
} else {
    echo "Por favor, preencha o formulário.<br>";
    echo"<a href='Cadastro.html'> voltar </a>";
}

$conexao->close();

?>

</body>
</html>
