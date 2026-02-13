let variaveis = [
    "CNPOJO2023",
    "Ludmilo1Capa2de3linguiça69",
    "Princeso@123",
    "Xoxoto72",
    "Siririco1Carinhoso",
    "Ubatubo@42",
    "Mestruado123",
    "SilosMalafaio25",
    "CagaTronco66",
    "Seborreio29"
]

console.log("Senhas sugeridas:\n") 
for(i = 0; i <= 3; i++){
    let indiceAleatorio = Math.floor(Math.random() * variaveis.length)
    let variavelEscolhida = variaveis[indiceAleatorio]

    console.log(variavelEscolhida)
}