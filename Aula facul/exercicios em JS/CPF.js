// declara a variável soma como zero
let soma = 0 

// Multiplica o número na posição i e adiciona a soma
for (let i = 0; i < 9; i++) {
    soma += numero[i] * (10 - i)
}

let primeiroDigito = 0

// Se o resultado da divisão por 11 for menor que 2, o primeiro dígito verificador é 0
if (soma % 11 < 2) {
    primeiroDigito = 0
} 
// Se não, calcula o primeiro dígito verificador
else {
    primeiroDigito = 11 - (soma % 11)
}

// Verifica se o primeiro dígito verificador é válido
if (primeiroDigito !== numero[9]) {
    console.log("CPF Inválido")
} 
else 
{
    // Zera a variável soma para o segundo dígito verificador
    soma = 0 

    for (let i = 0; i < 10; i++) {
        soma += numero[i] * (11 - i)
    }

    let segundoDigito = 0

    if (soma % 11 < 2) {
        segundoDigito = 0
    } 
    else {
        segundoDigito = 11 - (soma % 11)
    }

    // Verifica se o segundo dígito verificador é válido
    if (segundoDigito !== numero[10]) {
        console.log("CPF Inválido")
    } else {
        console.log("CPF Válido")
    }
}