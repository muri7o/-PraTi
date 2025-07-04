// Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
// utilizando uma estrutura de controle if.

const prompt = require('prompt-sync')();

let num = parseInt(prompt('Digite um número inteiro: '));
console.log(num % 2 === 0 ? "Par" : "Ímpar");