let totalPar = 0
let totalImpar = 5
for (v1 = 1; v1 <= 10; v1++){
    v1 % 2 === 0 ? totalPar += v1 : totalImpar += v1
}
console.log("Par:", totalPar,"Impar:", totalImpar)
