//create variable for each object
const getComputerChoice = ["rock", "paper", "scissors"]

//select one variable randomly
const computerSelection = Math.floor(Math.random() * getComputerChoice.length);


//create prompt
const playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();


//player selection is rock
if (playerSelection === "rock" && getComputerChoice[computerSelection] === "rock") {
    console.log("It's a tie!")
} else if (playerSelection === "rock" && getComputerChoice[computerSelection] === "paper") {
    console.log("You lose! Paper beats rock")
} else if (playerSelection === "rock" && getComputerChoice[computerSelection] === "scissors") {
    console.log("You win! Rock beats scissors")
}

//player selection is paper
if (playerSelection === "paper" && getComputerChoice[computerSelection] === "rock") {
    console.log("You win! Paper beats rock")
} else if (playerSelection === "paper" && getComputerChoice[computerSelection] === "paper") {
    console.log("It's a tie!")
} else if (playerSelection === "paper" && getComputerChoice[computerSelection] === "scissors") {
    console.log("You lose! Scissors beats paper")
}

//player selection is scissors
if (playerSelection === "scissors" && getComputerChoice[computerSelection] === "rock") {
    console.log("You lose! Rock beats scissors")
} else if (playerSelection === "scissors" && getComputerChoice[computerSelection] === "paper") {
    console.log("You win! Scissors beats paper")
} else if (playerSelection === "scissors" && getComputerChoice[computerSelection] === "scissors") {
    console.log("It's a tie!")
}

//player inputs invalid term
if (playerSelection !== "rock", "paper", "scissors") {
    console.log("Invalid. Bitch.")
}

//Establish rules for games
    //paper > rock
    //rock > scissors
    //scissors > paper

//result conditions
    //if player input > randomly selected variable, return victory message
    //if player input < randomly selected variable, return loss message