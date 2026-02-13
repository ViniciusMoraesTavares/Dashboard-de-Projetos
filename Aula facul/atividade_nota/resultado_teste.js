let v1 = parseInt(prompt("Informe o primeiro valor:"))
let v2 = parseInt(prompt("Informe o segundo valor:"))

let operador = prompt("Informe a operação:")
let total = 0
if(operador === "+"){
    total = v1 + v2
    alert("Resultado =  ", total)
}
else if(operador === "-"){
    total = v1 - v2
    alert("Resultado =  " + total)
}
else if(operador === "*"){
    total = v1 * v2
    alert("Resultado =  " + total)
}
else if(operador === "/"){
    total = v1 / v2
    alert("Resultado =  " + total)
}
else{
    alert("Operação inválida")
}