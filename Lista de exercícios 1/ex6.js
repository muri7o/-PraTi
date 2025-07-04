// Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.

const prompt = require('prompt-sync')();

let A = parseFloat(prompt("Digite o valor do lado A: "));
let B = parseFloat(prompt("Digite o valor do lado B: "));
let C = parseFloat(prompt("Digite o valor do lado C: "));

// Verifica se forma triângulo
if (A < B + C && B < A + C && C < A + B) {
  console.log("Os lados formam um triângulo.");

  if (A === B && B === C) {
    console.log("Tipo: Equilátero");
  } else if (A === B || A === C || B === C) {
    console.log("Tipo: Isósceles");
  } else {
    console.log("Tipo: Escaleno");
  }

} else {
  console.log("Os valores fornecidos NÃO formam um triângulo.");
}
