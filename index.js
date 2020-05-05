function rps(playerHand) {
  let computerHand = ["rock", "paper", "scissors"][
    Math.floor(Math.random() * 3)
  ];
  //   console.log(Math.floor(Math.random() * 3));
  document.getElementById("playerTarget").innerHTML = playerHand;
  document.getElementById("computerTarget").innerHTML = computerHand;
  if (playerHand == computerHand) {
    document.getElementById("winnerTarget").innerHTML = "no one";
  } else if (playerHand == "rock" && computerHand == "scissors") {
    document.getElementById("winnerTarget").innerHTML = "you";
  } else if (playerHand == "scissors" && computerHand == "paper") {
    document.getElementById("winnerTarget").innerHTML = "you";
  } else if (playerHand == "paper" && computerHand == "rock") {
    document.getElementById("winnerTarget").innerHTML = "you";
  } else {
    document.getElementById("winnerTarget").innerHTML = "computer";
  }
}
