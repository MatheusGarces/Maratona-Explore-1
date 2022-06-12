
const inputPergunta = document.querySelector("#inputPergunta")
const elementPergunta = document.querySelector("#resposta")
const butaoPerguntar = document.querySelector("#butaoPerguntar")
const respostas = [
  "Sim, absolutamente.",
  "desiste.",
  "Você nunca vai conseguir isso.",
  "Minhas fontes dizem que sim.",
  "Minhas fontes dizem que não.",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
  "Não."
]

//clicar em fazer pergunta
function fazerPergunta() {
  
  if(inputPergunta.value == ""){
    alert("Digite sua pergunta")
    return
  }
  
  butaoPerguntar.setAttribute("disabled", true)
  const pergunta = "<div>" + inputPergunta.value + "</div>"
  
  //gerar numero aleatorio
  const totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random(0) * respostas.length)
  
  elementPergunta.innerHTML = pergunta + respostas[numeroAleatorio]
  elementPergunta.style.opacity = 1;

  setTimeout(function() { elementPergunta.style.opacity = 0; butaoPerguntar.removeAttribute("disabled") }, 3000)
}