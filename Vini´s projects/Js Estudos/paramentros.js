function saudacao(nome = "Visitante") {
    console.log("Olá, " + nome);
  }
  
  saudacao("Vinicius");  
  saudacao();       
  
  function juntarPalavras(...palavras) {
    return palavras.join(" ");
  }
  
  console.log(juntarPalavras("Eu", "amo", "JavaScript")); 
  

  