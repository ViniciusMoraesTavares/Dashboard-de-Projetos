document.addEventListener("DOMContentLoaded", function () {
  let temas = [
    { nome: "frutas", palavras: ["Banana", "Maçã", "Melão", "Abacaxi", "Morango", "Pera", "Melancia", "Manga", "Kiwi", "Cereja", "Coco"] },
    { nome: "animais", palavras: ["Leão", "Elefante", "Girafa", "Tigre", "Gorila", "Zebra", "Cachorro", "Gato", "Panda", "Cavalo"] },
    { nome: "comidas", palavras: ["Pizza", "Sushi", "Hambúrguer", "Lasanha", "Salada", "Chocolate", "Frango", "Massa", "Sopa", "Sanduíche"] },
    { nome: "CEP", palavras: ["São Paulo", "Rio de Janeiro", "Argentina", "Minas Gerais", "Brasília", "Alemanha", "Bahia", "Recife", "Canadá", "Rio Grande do Sul", "Fortaleza", "Estados Unidos", "Paraná", "Salvador", "Itália", "Pernambuco", "Manaus", "Austrália", "Ceará", "Belém", "França", "Santa Catarina", "Porto Alegre", "Japão", "Piauí", "Curitiba", "México", "Rio Grande do Norte", "Natal", "Espanha"] },
    { nome: "profissioes", palavras: ["Médico", "Professor", "Engenheiro", "Jornalista", "Bombeiro", "Cientista", "Designer", "Músico", "Advogado", "Agricultor"] },
    { nome: "esportes", palavras: ["Futebol", "Basquete", "Tênis", "Natação", "Golfe", "Atletismo", "Vôlei", "Handebol", "Ciclismo", "Esqui"] },
    { nome: "veiculos", palavras: ["Carro", "Avião", "Bicicleta", "Navio", "Ônibus", "Trem", "Helicóptero", "Moto", "Caminhão", "Barco"] },
    { nome: "cores", palavras: ["Vermelho", "Azul", "Amarelo", "Verde", "Rosa", "Laranja", "Roxo", "Marrom", "Cinza", "Preto"] },
    { nome: "instrumentos", palavras: ["Violão", "Piano", "Trompete", "Flauta", "Bateria", "Violino", "Saxofone", "Guitarra", "Acordeão", "Harpa"] }
  ]

  let temaEscolhido = escolherTemaAleatorio()
  let palavraDaPartida = escolherPalavraAleatoria(temaEscolhido.palavras)
  let chances = 8
  let letrasReveladas = new Array(palavraDaPartida.length).fill("_")
  let partidasRestantes = 15
  let pontuacao = 0

  document.getElementById("tema").textContent += temaEscolhido.nome
  document.getElementById("dificuldade").textContent += (palavraDaPartida.length < 8 ? "Fácil" : (palavraDaPartida.length <= 10 ? "Médio" : "Difícil"))
  document.getElementById("quantidadeLetras").textContent += palavraDaPartida.length
  document.getElementById("palavraEscondida").textContent += letrasReveladas.join(" ")
  document.getElementById("chancesRestantes").textContent = "Chances: " + chances
  document.getElementById("pontuacao").textContent = "Pontuação: " + pontuacao

  document.getElementById("escolhaUsuario").addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      verificarEscolha()
    }
  })

  document.getElementById("escolhaUsuario").focus()

  let escolhaUsuario = document.getElementById("escolhaUsuario")
  let letrasErradas = document.getElementById("letrasErradas")
  let dicaTexto = "Digite uma letra ou palavra"

  escolhaUsuario.placeholder = dicaTexto

  escolhaUsuario.addEventListener("input", function () {
    if (escolhaUsuario.value !== "") {
      escolhaUsuario.placeholder = ""
    } else {
      escolhaUsuario.placeholder = dicaTexto
    }
  })

  function verificarEscolha() {
    let escolhaDoUsuario = escolhaUsuario.value.toLowerCase()

    if ((escolhaDoUsuario.length === 1 || escolhaDoUsuario.length >= 4) && /^[a-zA-Z]+$/.test(escolhaDoUsuario)) {
      if (escolhaDoUsuario.length === 1) {
        verificarLetra(escolhaDoUsuario)
      } else {
        verificarPalavra(escolhaDoUsuario)
      }
    } else {
      alert("Escolha inválida. Informe uma única letra ou uma palavra.")
    }

    escolhaUsuario.value = ""
    escolhaUsuario.placeholder = dicaTexto
  }

  function verificarLetra(letra) {
    const letraNormalizada = letra.toLowerCase()

    if (palavraDaPartida.includes(letraNormalizada)) {
      for (let i = 0; i < palavraDaPartida.length; i++) {
        const letraPalavraNormalizada = palavraDaPartida[i].toLowerCase()

        if (letraPalavraNormalizada === letraNormalizada && letrasReveladas[i] === "_") {
          letrasReveladas[i] = palavraDaPartida[i]
          pontuacao += 100 - 10 * letrasReveladas.filter(l => l !== "_").length
        }
      }

      exibirPalavraEscondida()

      if (palavraCompletaRevelada()) {
        partidasRestantes--
        if (partidasRestantes > 0) {
          alert("Parabéns, você acertou a palavra: " + palavraDaPartida)
          reiniciarJogo()
        } else {
          exibirMensagemFinal("Parabéns, você conseguiu " + pontuacao + " pontos! Você venceu!")
        }
        return
      }
    } else if (!letrasErradas.textContent.includes(letraNormalizada)) {
      diminuirChances();
      letrasErradas.textContent += letraNormalizada + " "
      letrasErradas.style.color = "red"
    }

    if (chances === 0) {
      partidasRestantes--
      if (partidasRestantes > 0) {
        alert("Acabaram suas chances, infelizmente você perdeu :( ")
        alert("A palavra era: " + palavraDaPartida)
        reiniciarJogo()
      } else {
        exibirMensagemFinal("Infelizmente, você não conseguiu atingir a pontuação desejada. Tente novamente!")
      }
    }
  }

  function exibirMensagemFinal(mensagem) {
    alert(mensagem)
    reiniciarJogo()
  }

  function exibirPalavraEscondida() {
    let palavraExibida = palavraDaPartida.split('').map((letra, index) => {
      if (letra === ' ') {
        return ' - '
      } else {
        return letrasReveladas[index]
      }
    }).join('')

    document.getElementById("palavraEscondida").textContent = "Palavra: " + palavraExibida
    document.getElementById("pontuacao").textContent = "Pontuação: " + pontuacao
  }

  function verificarPalavra(palavra) {
    if (palavra === palavraDaPartida) {
      pontuacao += 100 - 10 * letrasReveladas.filter(l => l !== "_").length
      exibirPalavraEscondida()
      partidasRestantes--
      if (partidasRestantes > 0) {
        alert("Parabéns, você acertou a palavra: " + palavraDaPartida)
        reiniciarJogo()
      } else {
        exibirMensagemFinal("Parabéns, você conseguiu " + pontuacao + " pontos! Você venceu!")
      }
    } else {
      diminuirChances()
    }
  }

  function diminuirChances() {
    chances--
    pontuacao -= 50
    document.getElementById("chancesRestantes").textContent = "Chances: " + chances

    let letraErrada = escolhaUsuario.value.toLowerCase()

    if (letraErrada && !letrasErradas.textContent.includes(letraErrada)) {
      letrasErradas.textContent += letraErrada + " "
      letrasErradas.style.color = "red"
    }

    if (chances === 0) {
      partidasRestantes--
      if (partidasRestantes > 0) {
        alert("Acabaram suas chances, infelizmente você perdeu :( ")
        alert("A palavra era: " + palavraDaPartida)
        reiniciarJogo()
      } else {
        exibirMensagemFinal("Infelizmente, você não conseguiu atingir a pontuação desejada. Tente novamente!")
      }
    }
  }

  function palavraCompletaRevelada() {
    return letrasReveladas.join("") === palavraDaPartida.replace(/ /g, "")
  }

  function escolherTemaAleatorio() {
    let indiceAleatorio = Math.floor(Math.random() * temas.length)
    return temas[indiceAleatorio]
  }

  function escolherPalavraAleatoria(array) {
    let palavrasNormalizadas = normalizarPalavrasComAcentos(array)
    let indiceAleatorio = Math.floor(Math.random() * palavrasNormalizadas.length)
    return palavrasNormalizadas[indiceAleatorio]
  }

  function reiniciarJogo() {
    temaEscolhido = escolherTemaAleatorio()
    palavraDaPartida = escolherPalavraAleatoria(temaEscolhido.palavras)
    chances = 8
    letrasReveladas = new Array(palavraDaPartida.length).fill("_")

    document.getElementById("tema").textContent = "Tema: " + temaEscolhido.nome
    document.getElementById("dificuldade").textContent = "Dificuldade: " + (palavraDaPartida.length < 8 ? "Fácil" : (palavraDaPartida.length <= 10 ? "Médio" : "Difícil"))
    document.getElementById("quantidadeLetras").textContent = "Quantidade de Letras: " + palavraDaPartida.length
    document.getElementById("palavraEscondida").textContent = "Palavra: " + letrasReveladas.join(" ")
    document.getElementById("chancesRestantes").textContent = "Chances: " + chances
    letrasErradas.textContent = ""
    document.getElementById("letrasErradas").style.color = "black"
    document.getElementById("pontuacao").textContent = "Pontuação: " + pontuacao
    document.getElementById("escolhaUsuario").focus()
  }

  function normalizarPalavrasComAcentos(array) {
    return array.map(palavra => letrasSemAcentos(palavra.toLowerCase()))
  }

  function letrasSemAcentos(texto) {
    return texto.replace(/[áàãâä]/gi, "a")
      .replace(/[éèêë]/gi, "e")
      .replace(/[íìîï]/gi, "i")
      .replace(/[óòõôö]/gi, "o")
      .replace(/[úùûü]/gi, "u")
      .replace(/[ç]/gi, "c")
  }
})