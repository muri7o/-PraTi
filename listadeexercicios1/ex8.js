// Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.

const prompt = require('prompt-sync')();

let v1 = parseInt(prompt("Digite um valor inteiro: "));
let v2 = parseInt(prompt("Digite um valor inteiro: "));

console.log(v1 < v2 ? `${v1} ${v2}` : `${v2} ${v1}`);

