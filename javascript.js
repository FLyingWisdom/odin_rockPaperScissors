console.log("Hello, World! This. is. Rock. Paper. Scissors!!!")

//create a function called getComputerChoice
// that will randomly generate a number between 1 and 3 and depending 
// on that assign it rock, paper or scissors
// the value that this returns is assigned as computerSelection

let randomNumber = Math.floor(Math.random() * 3) + 1;
console.log(randomNumber);
let computerSelection;

let getComputerChoice = function () {
    if (randomNumber === 1) {
        return computerSelection = 'Rock';
    }
    else if (randomNumber === 2) {
        return computerSelection = 'Paper';
    }
    else {
        return computerSelection = 'Scissors'
    }
    return computerSelection;
}

getComputerChoice();

console.log(computerSelection)

let playerSelection =  prompt ("What do you draw, partner?", '');

let playRound = function() {
    if (playerSelection === 'Rock') {
        if (computerSelection === 'Rock'){
            alert('You drew! A stalemate!?!');
        } else if (computerSelection === 'Scissors') {
            alert('You won! A tough battle...');
        } else if (computerSelection === 'Paper') {
            alert('You lost!Better luck next time, partner. May fate shine on you next time...')
        } else {
            alert('Alert!An Error in the Matrix!')
        }

    }
    else if (playerSelection === 'Scissors') {
        if (computerSelection === 'Scissors'){
            alert('You drew! A stalemate!?!');
        } else if (computerSelection === 'Paper') {
            alert('You won! A tough battle...');
        } else if (computerSelection === 'Rock') {
            alert('You lost!Better luck next time, partner. May fate shine on you next time...')
        } else {
            alert('Alert!An Error in the Matrix!')
        }
        
    }

    else if (playerSelection === 'Paper') {
        if (computerSelection === 'Paper'){
            alert('You drew! A stalemate!?!');
        } else if (computerSelection === 'Rock') {
            alert('You won! A tough battle...');
        } else if (computerSelection === 'Scissors') {
            alert('You lost!Better luck next time, partner. May fate shine on you next time...')
        } else {
            alert('Alert!An Error in the Matrix!')
        }
        
    } else {
        alert('Well, this is just wrong... You cant bring a knife to a gun fight Mr. Spock!')
    }

}

playRound();



// create a function that takes user input of rock, paper or scissors
// this is playerSelection, player selection is cases insesnitive
// the function then compares the two values and
// using an if else statement (?) determines who wins
// through a return statement of "you lose/win, x beats y"

