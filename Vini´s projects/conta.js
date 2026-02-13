let v1 = 10
let v2 = 20
let resultado = 0
let operador = '+'

if(operador == '+'){
    resultado = v1 + v2
    console.log("O resultado da soma é:", resultado)
}
else if(operador == '-'){
    resultado = v1 - v2
    console.log("O rsultado da subtração é:", resultado)
}
else if(operador == '*'){
    resultado = v1 * v2
    console.log("O resultado da multiplicação é:", resultado)
}
else if(operador == '/'){
    if(v2 === 0){
        console.log("Erro, divisão por zero")
    }
    else{
        resultado = v1 / v2
        console.log("O resultado da divisão é:", resultado)
    }
}
