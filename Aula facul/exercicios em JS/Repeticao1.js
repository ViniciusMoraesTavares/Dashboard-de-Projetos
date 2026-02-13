//       0 1 2 3 4
let a = [1,2,3,4,5]
//       0 1 2 3 4
let b = [6,7,8,9,10]
soma = []
soma1 = 0
subtracao = []
multiplicacao = []
divisao = []

{
    for(i = 0; i < a.length; i++){
        soma[i] = (a[i] + b[i])
        subtracao[i] = (a[i] - b[i])
        multiplicacao[i] = (a[i] * b[i])
        divisao[i] = ((a[i] / b[i]).toFixed(2))
    }
}

for(i = 0; i < soma.length; i++){
    soma1 += soma[i]
}

console.log("Soma =", soma)
console.log("Soma do vetor 'soma' =", soma1)
console.log("Subtração =", subtracao)
console.log("Multiplicação =", multiplicacao)
console.log("Divisão =", divisao)