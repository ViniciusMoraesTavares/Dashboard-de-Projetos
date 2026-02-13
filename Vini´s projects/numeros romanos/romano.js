let continuar = "S"
while(continuar === "S"){
    let pergunta = prompt("Qual tipo de numero deseja converter, Int ou romano?").toUpperCase()

if(pergunta === "ROMANO"){
    let pergunta2 = prompt("Informe o numeral romano para converter:")
    const romanToInt = function(s){
        const mapaNumerosRomanos = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000
        }
        
        let resultado = 0
        
        for (let i = 0; i < s.length; i++){
            const numeralAtual = mapaNumerosRomanos[s[i]]
            const proximoNumeral = mapaNumerosRomanos[s[i + 1]]
        
            if (proximoNumeral > numeralAtual) {
                resultado += (proximoNumeral - numeralAtual)
                i++ 
        
            }else {
                resultado += numeralAtual
            }
        }
        
            return resultado
        } 
        pergunta2 = romanToInt(pergunta2)
        alert(pergunta2)

    
    } 
    else if(pergunta === "INT"){
        let pergunta3 = parseInt(prompt("Informe o Int para coverter:"))
        if(!isNaN(pergunta3)){
            const intToRoman = function(num) {
                const mapaNumerosRomanos = [
                    { valor: 1000, numeral: 'M' },
                    { valor: 900, numeral: 'CM' },
                    { valor: 500, numeral: 'D' },
                    { valor: 400, numeral: 'CD' },
                    { valor: 100, numeral: 'C' },
                    { valor: 90, numeral: 'XC' },
                    { valor: 50, numeral: 'L' },
                    { valor: 40, numeral: 'XL' },
                    { valor: 10, numeral: 'X' },
                    { valor: 9, numeral: 'IX' },
                    { valor: 5, numeral: 'V' },
                    { valor: 4, numeral: 'IV' },
                    { valor: 1, numeral: 'I' }
                ]
                let resultado = ''
            
                for (let i = 0; i < mapaNumerosRomanos.length; i++) {
                    while (mapaNumerosRomanos[i].valor <= num) {
                        resultado += mapaNumerosRomanos[i].numeral
                        num -= mapaNumerosRomanos[i].valor
                    }
                }
                return resultado
            }

            pergunta3 = intToRoman(pergunta3)
            alert(pergunta3)
       }
    }else{
        alert("erro")
    }
    continuar = prompt("Deseja fazer novamente? (S/N)").toUpperCase()
}