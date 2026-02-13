// Demonstração de escopo de variáveis em JavaScript

// Exemplo de escopo de bloco com var (não recomendado)
if (true) {
  var escopoBloco = "Sou uma variável com var";
}
console.log(escopoBloco); // Funciona devido ao hoisting de var

// Exemplo de redeclaração com var (não recomendado)
var vini = 1;
var vini = 2;
console.log(vini); // Imprime 2

// Exemplo correto usando let
let vin = 3;
vin = 4;
console.log(vin); // Imprime 4

// Exemplo de declaração e atribuição separadas
let num1;
num1 = 10;
console.log(`O num1 é: ${num1}`); // Usando template string para melhor legibilidade
