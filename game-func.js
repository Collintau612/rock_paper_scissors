//Create array of options for computer selection
const objects = ["rock", "paper", "scissors"] //Refer to each object through 1,2,3

//Make function to randomly choose object for computer selection 
function computerSelection (objects) {
    return objects[Math.floor(Math.random() * objects.length)]
}

console.log(computerSelection(objects))