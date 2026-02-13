let continuar = "S"

while(continuar === "S"){
    let pergunta_inicial = prompt("Deseja converter Celsius ou Fahrenheit?").toUpperCase()
    let temperatura = parseInt(prompt("Informe a temperatura:"))

    if(pergunta_inicial === "CELSIUS"){
        fahrenheit = (temperatura * 9/5) + 32
        alert("A temperatura  " + temperatura + "  graus de Celsius para Fahrenheit é:  " + fahrenheit + "  graus")
    }
    else if(pergunta_inicial === "FAHRENHEIT"){
        celsius = (temperatura - 32) * 5/9
        alert("A temperatura  " + temperatura + "  graus de Fahrenheit para Celsius é:  " + celsius + "  graus")
    }
    else{
        alert("Infome Celsius ou Fahrenheit")
    }
    continuar = prompt("Deseja fazer novamente? S/N").toUpperCase()
}
