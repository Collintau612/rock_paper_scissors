//Create array of options for computer selection
const objects = ["rock", "paper", "scissors"]


//Make function to randomly choose object for computer selection 
function computerSelection (objects) {
    let choice = objects[Math.floor(Math.random() * objects.length)];
    return choice;
}


//Make function for players to input their selection
function playerSelection () {
    let choice = prompt("Rock, Paper, Scissors?").toLowerCase();
    if (!["rock", "paper", "scissors"].includes(choice)) {
        console.log("Invalid")
    }
    return choice
}


//Make function for players to write in their selection
function playRound (playerSelection, computerSelection) {
    
    if (playerSelection == "rock" && computerSelection == "rock") {
       return console.log("It's a tie!")
    } else if (playerSelection == "rock" && computerSelection == "paper") {
       return console.log("You lose! Paper beats rock.")
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return console.log("You win! Rock beats scissors.")
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return console.log("You win! Paper beats rock.")
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        return console.log("It's a tie!")
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return console.log("You lose! Scissors beats paper.")
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return console.log("You lose! Rock beats scissors.")
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return console.log("You win! Scissors beats paper.") 
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        return console.log("It's a tie!")
    } 
}


for (i=0; i<5; i++) {
    playRound(playerSelection(), computerSelection(objects))
}