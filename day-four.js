alert("Você tem 3 tentativas para acertar o número que estou pensando. Dica: Ele está entre 0 e 10.")

const numero = Math.floor(Math.random() * (10 - 1 + 1) + 1);
let chute = "";
let acertou = false;
let contador;

for (contador = 0; contador <3; contador++){
    chute = prompt("Tente adivinhar o número:");
    if(chute == numero){
        alert(`Parabéns, você acertou! O número era ${numero}.`);
        acertou = true;
    } else {
      alert("Errado!");
    }
    
}

if(!acertou){
    alert(`Infelizmente, você não acertou. O número era ${numero}!`);
}
