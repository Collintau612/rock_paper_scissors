//Create array of options for computer selection
const objects = ["rock", "paper", "scissors"] //Refer to each object through 1,2,3

//Make function to randomly choose object for computer selection 
function computerSelection (objects) {
    return objects[Math.floor(Math.random() * objects.length)]
}

//Make function for players to write in their selection
function playerSelection (objects) {
    let choice = prompt("Rock, Paper, Scissors?").toLowerCase();
    if (!["rock", "paper", "scissors"].includes(choice)) {
        console.log("Invalid")
    }
    return choice
}
console.log(playerSelection(objects))

