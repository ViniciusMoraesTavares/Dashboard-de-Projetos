let continuar = "S"

while(continuar === "S") {
    let nome = prompt("Informe o nome do(a) aluno(a):")

    function obterNota(mensagem) {
        let nota = prompt(mensagem).replace(',', '.')
        return parseFloat(nota)
    }

    let v1 = obterNota("Nota do trabalho 01: (maximo: 2,00 pontos)")
    let v2 = obterNota("Nota do trabalho 02: (maximo: 2,00 pontos)")
    let v3 = obterNota("Nota do trabalho 03: (maximo: 2,00 pontos)")
    let v4 = obterNota("Nota das Questões Online 1: (maximo: 0,40 pontos)")
    let v5 = obterNota("Nota das Questões Online 2: (maximo: 0,40 pontos)")
    let v6 = obterNota("Nota das Questões Online 3: (maximo: 0,40 pontos)")
    let v7 = obterNota("Nota das Questões Online 4: (maximo: 0,40 pontos)")
    let v8 = obterNota("Nota das Questões Online 5: (maximo: 0,40 pontos)")
    let v9 = obterNota("Nota da prova específica 1: (maximo: 6,00 pontos)")
    let v0 = obterNota("Nota da prova específica 2: (maximo: 3,00 pontos)")
    let v10 = obterNota("Nota da prova ASI: (maximo: 3,00 pontos)")

    let trabalhos = 0
    let questoes = 0
    let provas = 0

    if ((v1 >= 0 && v1 <= 2) && (v2 >= 0 && v2 <= 2) && (v3 >= 0 && v3 <= 2)){
        trabalhos = (v1 + v2 + v3)/2
    } else {
        alert("Informe as notas dos trabalhos corretamente")
        break;
    }

    if ((v4 >= 0 && v4 <= 0.4) && (v5 >= 0 && v5 <= 0.4) && (v6 >= 0 && v6 <= 0.4) &&(v7 >= 0 && v7 <= 0.4) && (v8 >= 0 && v8 <= 0.4)){
        questoes = (v4 + v5 + v6 + v7 + v8)/2
    } else {
        alert("Informe as notas das Questões Online corretamente")
        break;
    }

    if ((v9 >= 0 && v9 <= 6) && (v0 >= 0 && v0 <= 3) && (v10 >= 0 && v10 <= 3)){
        provas = (v9 + v0 + v10)/2
    }else{
        alert("Informe as notas das provas corretamente")
        break;
    }

    let media = trabalhos + questoes + provas

    if(media >= 6){
        alert("Aluno:  "+ nome + ", média:  " + media + ": Aprovado")
    } else {
        alert("Aluno:  "+ nome + ", média:  " + media + ": Reprovado")
    }

    continuar = prompt("Deseja fazer novamente? (S/N)").toUpperCase()
}