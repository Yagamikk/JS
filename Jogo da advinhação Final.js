alert('Boas vindas ao jogo do número secreto');
let dificuldade = prompt('Escolha a dificuldade: 1 - Fácil, 2 - Médio, 3 - Difícil');
let valor = dificuldade < 2 ? 10 : dificuldade > 2 ? 100 : 50;
let numeroSecreto = parseInt(Math.random() * valor + 1);
console.log(numeroSecreto)
let chute;
let tentativas = 1;

// enquanto chute não for igual ao n.s.
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 100');
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
       break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`)
        } else {
            alert(`O número secreto é maior que ${chute}`)
        }
        // tentativas = tentativas + 1
        tentativas++
    }
}
let palavratentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Parabéns! você acertou a palavra secreta em ${tentativas} ${palavratentativa}`);
