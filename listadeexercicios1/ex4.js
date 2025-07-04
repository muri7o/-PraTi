//Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.

const prompt = require('prompt-sync')();

console.log('Menu:');
console.log('1 - Dizer olá');
console.log('2 - Hino Nacional');
console.log('3 - Dizer tchau');

let opcao = prompt('Escolha uma opção: ');

switch (opcao) {
  case '1':
    console.log('Olá!');
    break;
  case '2':
    console.log(`Ouviram do Ipiranga as margens plácidas
De um povo heroico o brado retumbante,
E o sol da Liberdade, em raios fúlgidos,
Brilhou no céu da Pátria nesse instante.

Se o penhor dessa igualdade
Conseguimos conquistar com braço forte,
Em teu seio, ó Liberdade,
Desafia o nosso peito a própria morte!

Ó Pátria amada,
Idolatrada,
Salve! Salve!

Brasil, um sonho intenso, um raio vívido
De amor e de esperança à terra desce,
Se em teu formoso céu, risonho e límpido,
A imagem do Cruzeiro resplandece.

Gigante pela própria natureza,
És belo, és forte, impávido colosso,
E o teu futuro espelha essa grandeza.

Terra adorada,
Entre outras mil,
És tu, Brasil,
Ó Pátria amada!

Dos filhos deste solo és mãe gentil,
Pátria amada,
Brasil!`);
    break;
  case '3':
    console.log('Tchau!');
    break;
  default:
    console.log('Opção inválida.');
}
