function computerPlay() {
    const rockPaperScissorsPick = ['rock', 'paper', 'scissors'];
    const valueToUse = rockPaperScissorsPick[Math.floor(Math.random() * rockPaperScissorsPick.length)]
    console.log('Computer chose: ' + valueToUse)
    return valueToUse
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log('Oh no! A tie');
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log('You Win! Rock beats Scissors');
        ++playerScore
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log('You Win! Scissors beat Paper');
        ++playerScore
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log('You Win! Paper beats Rock');
        ++playerScore
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        console.log('You Lose! Rock beats Scissors');
        ++computerScore
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        console.log('You Lose! Scissors beats Paper');
        ++computerScore
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        console.log('You Lose! Paper beats Rock');
        ++computerScore
    }
}

function playerInput() {
    const ask = prompt('Rock, Paper or Scissors?');
    console.log('You chose: ' + ask)
    return ask
}

function game() {
    
    for (let i = 0; i < 5; i++) {
        playRound(playerInput(), computerPlay());
        console.log(playerScore, computerScore)
    }
}

let playerScore = 0
let computerScore = 0

game()
