// As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

const prompt = require('prompt-sync')();

let qtd = parseInt(prompt("Digite a quantidade de maçãs: "));

let preco = qtd < 12 ? 0.30 : 0.25;
let total = qtd * preco;

console.log(`Valor total: R$ ${total.toFixed(2)}`);
