let continuar = "S"

while(continuar === "S"){
    let numero = parseInt(prompt("Digite um número:"))
    let tabuada = ""
    if(numero < 1 || numero > 9){
        alert("Digite um numero entre 1 e 9")
    }else{
        for (let i = 1; i <= 9; i++){
        tabuada += `${numero} x ${i} = ${numero * i}\n`
        }
        alert(`Tabuada do ${numero} : \n ${tabuada}`)
        continuar = prompt("Deseja fazer outra vez? S/N").toUpperCase()
        }
    
}