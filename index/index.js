// Criação das variaveis, nesse caso, dois numeros para serem inseridos na calculadora
let x = 0;
let y = 0;
// Aqui iremos ter uma interação com o usuario, para que ele nos forneça os dois numeros que vamos usar nas operações
x = prompt("Digite o primeiro numero");
y = prompt("Digite o segundo numero");
// Aqui utilizamos uma tecnica de conversão de unidades, já que os resultados vindos de um "prompt" são strings, usamos o parseFloat para convertê-los em numeros
let n1 = parseFloat(x);
let n2 = parseFloat(y);
// Aqui tinhamos um alert que apresenta os numeros que foram escolhidos pelo usuario
alert("Os números escolhidos foram " + x + " e " + y);
// Aqui criamos as regras de operação da nossa calculadora
let sum = n1 + n2;
let sub = n1 - n2;
let mult = n1 * n2;
let divi = n1 / n2;
// Aqui imprimimos os resultados dentro do console do navegador
console.log("A soma é igual a " + sum);
console.log("A subtração é igual a " + sub);
console.log("A multiplicação é igual a " + mult);
console.log("A divisão é igual a " + divi);
