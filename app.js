alert("Bem-Vindo ao jogo do numero secreto!");
let numeroSecreto = parseInt(Math.random() * 100 + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;


while(chute != numeroSecreto) {
   chute = prompt("Digite um numero entre 0 e 100:");
  // Parar 
   if (chute == numeroSecreto) {
      break;
   } else {
      if (chute > numeroSecreto) {
         alert(`O numero secreto e menor que ${chute}`);
      } else {
         alert(`O numero secreto e maior que ${chute}`);
      }
      // tentativas = tentativas + 1;
      tentativas++;
   } 
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(`Parabens voce acertou o numero secreto: ${numeroSecreto} com ${tentativas} ${palavraTentativa}!`);

// Alternativa com if
// if (tentativas > 1) {
//    alert(`Parabens voce acertou o numero secreto: ${numeroSecreto} com ${tentativas} tentativas!`);
// } else {
//    alert(`Parabens voce acertou o numero secreto: ${numeroSecreto} na sua primeira tentativa!`);
// }





