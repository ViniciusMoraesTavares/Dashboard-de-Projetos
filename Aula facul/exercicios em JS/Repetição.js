let totalPar = 0
let totalImpar = 0

for (i = 1; i <= 10; i++){
    if( i %2 === 0){
        totalPar += i
        console.log("Par:", totalPar) 
    } else{
        totalImpar += i
        console.log("Impar:", totalImpar)   
    }
}
console.log("Valor Par (total): "+totalPar)
console.log("Valor Impar (total): "+totalImpar)