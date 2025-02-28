alert ("bem vindo ao jogo da advinhação");
let numerosecreto = 3;
console.log (`o numero secreto é ${numerosecreto}`);
let chute = prompt("Digite um número de 1 a 10");
console.log (`o chute foi ${chute}`);
let soma = Number(chute) + Number(numerosecreto);
console.log (`a soma dos valores é ${soma}`);
if (chute == numerosecreto) {
    alert("Parabéns, você acertou!");
}
else{
    alert("que pena, você errou, o numero secreto era " + numerosecreto +  " mas seu chute foi " + chute + " e a soma dos valores seria " + soma );
}
