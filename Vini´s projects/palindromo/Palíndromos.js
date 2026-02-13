let continuar = "S"

while(continuar === "S"){
    let palavra = prompt("Digite uma palavra ou texto:")
    let palavraSemEspacos = palavra.replace(/\s/g, "").toLowerCase()
    let palavraInvertida = palavraSemEspacos.split('').reverse().join('')

    if (palavraSemEspacos === palavraInvertida) {
    alert(palavra + " é um palíndromo")
    } else {
    alert(palavra + " não é um palíndromo")
    }
    continuar = prompt("Desejar fazer novamente? S/N").toUpperCase()
}