// Solicita os dois números ao usuário
let numero1 = parseFloat(prompt("Insira o primeiro número:"));
let numero2 = parseFloat(prompt("Insira o segundo número:"));

// Calcula a soma
let soma = numero1 + numero2;

// Calcula a subtração
let subtracao = numero1 - numero2;

// Calcula a multiplicação
let multiplicacao = numero1 * numero2;

// Verifica se o segundo número não é zero antes de realizar a divisão e o resto da divisão
let divisao;
let restoDivisao;
if (numero2 !== 0) {
  divisao = numero1 / numero2;
  restoDivisao = numero1 % numero2;
} else {
  divisao = "Não é possível dividir por zero";
  restoDivisao = "Não é possível calcular o resto da divisão por zero";
}

// Exibe os resultados no console
console.log(`Soma: ${soma}`);
console.log(`Subtração: ${subtracao}`);
console.log(`Multiplicação: ${multiplicacao}`);
console.log(`Divisão: ${divisao}`);
console.log(`Resto da divisão: ${restoDivisao}`);
