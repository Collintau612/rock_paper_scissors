//create variable for each object
const getComputerChoice = ["rock", "paper", "scissors"]

//select one variable randomly
const computerSelection = Math.floor(Math.random() * getComputerChoice.length);
console.log(getComputerChoice[computerSelection]);

//create prompt
const playerSelection = prompt("Rock, Paper, or Scissors?");


//player selection is rock
if (playerSelection === "rock" && getComputerChoice[computerSelection] === "rock") {
    console.log("It's a tie!")
} else if (playerSelection === "rock" && getComputerChoice[computerSelection] === "paper") {
    console.log("You lose!")
} else if (playerSelection === "rock" && getComputerChoice[computerSelection] === "scissors") {
    console.log("You win!")
}


//Establish rules for games
    //paper > rock
    //rock > scissors
    //scissors > paper

//result conditions
    //if player input > randomly selected variable, return victory message
    //if player input < randomly selected variable, return loss message