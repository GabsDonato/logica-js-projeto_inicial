alert("Welcome to the secret game!");
let numeroSecreto = 5;
console.log("The secret number is: " + numeroSecreto);
let chute = prompt("Choose a number between 1 and 10:");

if (numeroSecreto == chute) {
   alert("Congratulations! You've guessed the secret number!");
}

else {
   alert("Wrong guess, try again!");
}
