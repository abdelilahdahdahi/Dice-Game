// launching the dice for the 1st player
let randomNumber1 = Math.round(Math.random() * 5) + 1; // generating a random number 1-6
let randomDice1 = "/images/dice" + randomNumber1 + ".png";
document.querySelector("#dadoPlayer1").setAttribute("src", randomDice1);

// launching the dice for the 2nd player
let randomNumber2 = Math.round(Math.random() * 5) +1;
let randomDice2 = "/images/dice" + randomNumber2 + ".png";
document.querySelector("#dadoPlayer2").setAttribute("src", randomDice2);

// declaring the winner
if (randomNumber1 > randomNumber2) {
    document.querySelector("#game-cta").textContent = "Player 1 won!";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("#game-cta").textContent = "Player 2 won!";
}
else {
    document.querySelector("#game-cta").textContent = "Draw!";
}


