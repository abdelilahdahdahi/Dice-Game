// generating a random number 
// from 1 to 6 for the first player
let randomNumber1 = Math.round(Math.random() * 6);

// generating another one for the second player
let randomNumber2 = Math.round(Math.random() * 6);

// launching the dice for the player 1
switch (randomNumber1) {
    case 1:
        document.querySelector("#dadoPlayer1").setAttribute("src", "images/dice1.png");
        break;
    case 2:
        document.querySelector("#dadoPlayer1").setAttribute("src", "images/dice2.png");
        break;
    case 3:
        document.querySelector("#dadoPlayer1").setAttribute("src", "images/dice3.png");
        break;
    case 4:
        document.querySelector("#dadoPlayer1").setAttribute("src", "images/dice4.png");
        break;
    case 5:
        document.querySelector("#dadoPlayer1").setAttribute("src", "images/dice5.png");
        break;
    case 6:
        document.querySelector("#dadoPlayer1").setAttribute("src", "images/dice6.png");
        break;
}

// launching the dice for the player 2
switch (randomNumber2) {
    case 1:
        document.querySelector("#dadoPlayer2").setAttribute("src", "images/dice1.png");
        break;
    case 2:
        document.querySelector("#dadoPlayer2").setAttribute("src", "images/dice2.png");
        break;
    case 3:
        document.querySelector("#dadoPlayer2").setAttribute("src", "images/dice3.png");
        break;
    case 4:
        document.querySelector("#dadoPlayer2").setAttribute("src", "images/dice4.png");
        break;
    case 5:
        document.querySelector("#dadoPlayer2").setAttribute("src", "images/dice5.png");
        break;
    case 6:
        document.querySelector("#dadoPlayer2").setAttribute("src", "images/dice6.png");
        break;
}

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


