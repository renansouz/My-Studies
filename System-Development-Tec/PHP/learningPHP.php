<?php

// Exibindo "Olá Mundo!"
echo "Olá Mundo!<br>";

// Operações matemáticas
$numero1 = 10;
$numero2 = 5;
$soma = $numero1 + $numero2;
$subtracao = $numero1 - $numero2;
echo "A soma é: " . $soma . "<br>";
echo "A subtração é: " . $subtracao . "<br>";

// Verificando maioridade
$idade = 20;
if ($idade >= 18) {
    echo "Você é maior de idade.<br>";
} else {
    echo "Você é menor de idade.<br>";
}

// Iterando sobre um array
$frutas = array("Maçã", "Banana", "Laranja", "Morango");
foreach ($frutas as $fruta) {
    echo $fruta . "<br>";
}

// Função para calcular soma
function calcularSoma($a, $b) {
    return $a + $b;
}

// Chamando a função para calcular a soma e exibindo o resultado
$resultado = calcularSoma(3, 4);
echo "A soma é: " . $resultado . "<br>";

// Manipulação de strings
$nome = "João";
$sobrenome = "Silva";
$nomeCompleto = $nome . " " . $sobrenome;
echo "Nome completo: " . $nomeCompleto . "<br>";

?>
