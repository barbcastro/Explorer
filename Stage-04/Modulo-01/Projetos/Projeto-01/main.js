const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

const btnTry = document.querySelector(".button-try")
const btnReload = document.querySelector(".button-again")

const tentativeMessage = document.querySelector(".tentative-message")
const randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1
let arrayMessage = [
  "Quase acertou, tente mais uma vez 🙌",
  "Na próxima você acerta 👌",
  "Não foi dessa vez, continue tentando 🥲",
  "Faltou pouco, tente novamente 😝",
  "Não desista, está quase lá 🏃‍♂️",
  "Faltou um fio de cabelo para acertar 😣",
  "Está quase, mais uma vez 😗",
  "Tente novamente 😉",
  "Mais algumas tentativas você consegue 😊",
  "Quase profissional, continue tentando 👍",
]

// Eventos
btnTry.addEventListener("click", handleTryClick)
btnReload.addEventListener("click", reloadGame)
document.addEventListener("keypress", changeScreenByEnter)

//funções cllback
function handleTryClick(event) {
  event.preventDefault(event) 

  const inputGuess = document.querySelector("#guess")

  if (inputGuess.value > 10 || inputGuess.value < 0) {
    
    alert("⚠️  Escolha um número entre 0 e 10  ⚠️")
    --xAttempts
  } else if (Number(inputGuess.value) == randomNumber) {
    toggleScreen()

    document.querySelector(
      ".screen2 h1"
    ).innerText = `Acertou em ${xAttempts} tentativas 🥳`
  } else {
    let randomArrayMessage = Math.round(Math.random() * 10)

    if (inputGuess.value != ""){

      tentativeMessage.innerText = arrayMessage[randomArrayMessage]
      
      xAttempts++

    }
  }

  if (inputGuess.value == "") {
    tentativeMessage.innerText = "Insira um valor 🤖"
  }

  inputGuess.value = ""
}

function reloadGame(event) {
  event.preventDefault(event)

  toggleScreen() 
  xAttempts = 1 
  randomNumber = Math.round(Math.random() * 10) 
  tentativeMessage.innerText = "" 
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function changeScreenByEnter(event) {
  if (event.key == "Enter" && screen1.classList.contains("hide")) {
    reloadGame(event)
  }
}