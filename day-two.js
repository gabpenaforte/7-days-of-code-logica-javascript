const nome = prompt("Digite o seu nome:");
const idade = prompt("Digite a sua idade:");
const linguagem = prompt("Digite a linguagem de programação que você está estudando:");


const msg = `Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`;

console.log(msg);

const pergunta = prompt(`Você gosta de estudar ${linguagem}?`) 

if (pergunta == 1){
    console.log("Muito bom! Continue estudando e você terá muito sucesso.")
}
if (pergunta == 2){
    console.log("Ahh que pena... Já tentou aprender outras linguagens?")
}

