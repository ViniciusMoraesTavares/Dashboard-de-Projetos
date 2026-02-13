let conta = 0 

for (let i = 0; i < 9; i++){
    conta = conta + digito[i] * (10 - i)
}

let numero1 = 0

if(conta % 11 < 2){
    numero1 = 0
} 
else{
    numero1 = 11 - (conta % 11)
}
if(numero1 !== digito[9]){
    console.log("CPF inválido")
} 
else{
    conta = 0 

    for (let i = 0; i < 10; i++){
        conta = conta + digito[i] * (11 - i)
    }

     let numero2 = 0

    if(conta % 11 < 2){
        numero2 = 0
    } 
    else{
        numero2 = 11 - (conta % 11)
    }
    if(numero2 !== digito[10]){
        console.log("CPF inválido")
    } 
    else{
        console.log("CPF válido")
    }
}