// Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.

const prompt = require('prompt-sync')();

let peso = prompt('Insira seu peso (kg) : ');
let altura = prompt('Insira seu altura (m): ');

let imc = peso / (altura * altura);

console.log(`Seu IMC é: ${imc}`);

if (imc < 18.5) {
  console.log("Classificação: Baixo peso");
} else if (imc < 25) {
  console.log("Classificação: Peso normal");
} else if (imc < 30) {
  console.log("Classificação: Sobrepeso");
} else {
  console.log("Classificação: Obesidade");
}