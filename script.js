//create variable for each object
const getComputerChoice = ["rock", "paper", "scissors"]

//select one variable randomly
const computerSelection = Math.floor(Math.random() * getComputerChoice.length);
console.log(getComputerChoice[computerSelection]);

//take player input

//Establish rules for games
    //paper > rock
    //rock > scissors
    //scissors > paper

//result conditions
    //if player input > randomly selected variable, return victory message
    //if player input < randomly selected variable, return loss message