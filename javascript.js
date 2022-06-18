function computerPlay() {
    const rockPaperScissorsPick = ['rock', 'paper', 'scissors'];
    const valueToUse = rockPaperScissorsPick[Math.floor(Math.random() * rockPaperScissorsPick.length)]
    return valueToUse
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()

    if (playerSelection === computerSelection) {
        result = 'Oh no! A tie';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        result = 'You Win! Rock beats Scissors';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        result = 'You Win! Scissors beat Paper';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        result = 'You Win! Paper beats Rock';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        result = 'You Lose! Rock beats Scissors';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        result = 'You Lose! Scissors beats Paper';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        result = 'You Lose! Paper beats Rock';
    }
    return result
}

const playerSelection = 'scissors';
console.log(playerSelection.toLowerCase())
const computerSelection = computerPlay();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection))