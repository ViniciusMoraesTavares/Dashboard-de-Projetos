let sugestaoLetras = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','u','v','w','x','y','z']
let sugestaoLetras2 = sugestaoLetras.join('').toUpperCase()
let sugestaoNumeros = ['0','1','2','3','4','5','6','7','8','9']
let sugestaoSimbolos = ['!','@','#','$','%','&','?']

let letrasAleatorias = ""
let letrasAleatorias2 = ""
let numerosAleatorios = ""
let simboloAleatorio = ""

function escolhaAleatoria(sugestao){
    for(i=0; i<5; i++){
        let indiceLetras = Math.floor(Math.random() * sugestaoLetras.length)
        letrasAleatorias += sugestaoLetras[indiceLetras]
    }

    for(i=0; i<3; i++){
        let indiceNumeros = Math.floor(Math.random() * sugestaoNumeros.length)
        numerosAleatorios += sugestaoNumeros[indiceNumeros]
    }

    let indiceSimbolos = Math.floor(Math.random() * sugestaoSimbolos.length)
    simboloAleatorio = sugestaoSimbolos[indiceSimbolos]

    let indiceLetras2 = Math.floor(Math.random() * sugestaoLetras2.length)
    letrasAleatorias2 = sugestaoLetras2[indiceLetras2]
}

escolhaAleatoria()

let sugestao = letrasAleatorias + numerosAleatorios + simboloAleatorio + letrasAleatorias2

function embaralharString(str){
    let arrayDeChars = str.split('')
    let stringEmbaralhada = arrayDeChars.sort(() => Math.random() - 0.5).join('')
    return stringEmbaralhada
}
sugestao = embaralharString(sugestao)
console.log(sugestao)