//Escreva um programa que solicita ao usuário 5 números e calcula a soma total
// utilizando um loop for.

const prompt = require('prompt-sync')();

let soma = 0

for(let i = 0; i < 5; i++){
    let num = parseFloat(prompt("Digite um valor: "));
    soma += num;
}

console.log(`A soma total dos números é: ${soma}`);