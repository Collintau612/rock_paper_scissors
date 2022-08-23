//create variable for each object
const objects = ["rock", "paper", "scissors"]

//select one variable randomly
const random = Math.floor(Math.random() * objects.length);

//take player input

//Establish rules for games
    //paper > rock
    //rock > scissors
    //scissors > paper

//result conditions
    //if player input > randomly selected variable, return victory message
    //if player input < randomly selected variable, return loss message