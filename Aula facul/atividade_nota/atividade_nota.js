let nome = prompt("nome do aluno:")
let nota = parseInt(prompt("nota do aluno:"))

if(nota <= 4){
    alert(nome + "  Status: refazer a prova")
}
else if(nota <= 6){
    alert(nome + "  Status: nota aprovada")
}
else if(nota <= 8){
    alert(nome + "  Status: nota aprovada, parabéns")
}
else{
    alert(nome + "  Status: nota aprovada, excelente")
}