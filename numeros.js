// Declare um vetor com 3 valores
let vetor = [20, 12, 25];

// Inicialize a variável para armazenar o maior valor
let maior = vetor[0];

// Percorra o vetor para encontrar o maior valor
for (let i = 1; i < vetor.length; i++) {
    if (vetor[i] > maior) {
        maior = vetor[i];
    }
}

// Imprima o maior valor
console.log("O maior valor é: " + maior);
