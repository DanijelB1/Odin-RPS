function computerPlay() {
    const rockPaperScissorsPick = ['rock', 'paper', 'scissors'];
    const valueToUse = rockPaperScissorsPick[Math.floor(Math.random() * rockPaperScissorsPick.length)];            
    console.log('Computer chose: ' + valueToUse);
	computerOutput.innerText = `${valueToUse}`.toUpperCase();
    return valueToUse;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log('Oh no! A tie');
		outcome.innerText = 'Oh no! A tie'
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log('You Win! Rock beats Scissors');
        ++playerScore;
		outcome.innerText = 'You Win! Rock beats Scissors';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log('You Win! Scissors beat Paper');
        ++playerScore;
		outcome.innerText = 'You Win! Scissors beat Paper';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log('You Win! Paper beats Rock');
        ++playerScore;
		outcome.innerText = 'You Win! Paper beats Rock';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        console.log('You Lose! Rock beats Scissors');
        ++computerScore;
		outcome.innerText = 'You Lose! Rock beats Scissors';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        console.log('You Lose! Scissors beats Paper');
        ++computerScore;
		outcome.innerText = 'You Lose! Scissors beats Paper';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        console.log('You Lose! Paper beats Rock');
        ++computerScore;
		outcome.innerText = 'You Lose! Paper beats Rock';
    }
}

function playerInput() {
    const ask = prompt('Rock, Paper or Scissors?');
    console.log('You chose: ' + ask)
    return ask
}



function declareWinner() {
    if (playerScore > computerScore) {
        alert('You win');
    } else if (playerScore < computerScore) {
        alert('Computer wins');
    } else {
        alert('It\'s a tie');
    }
}


let playerScore = 0;
let computerScore = 0;


let rock = document.querySelector('.rock');
rock.addEventListener('click', () => {
    playRound ('rock', computerPlay());
    playerScoreOutput.innerHTML =`${playerScore}`;
    computerScoreOutput.innerHTML = `${computerScore}`;
    playerOutput.innerHTML = 'ROCK';
	if (playerScore === 5 || computerScore === 5) {
        declareWinner();
    }
})
 

let paper = document.querySelector('.paper');
paper.addEventListener('click', () => {
    playRound ('paper', computerPlay());
    playerScoreOutput.innerHTML =`${playerScore}`;
    computerScoreOutput.innerHTML = `${computerScore}`;
    playerOutput.innerHTML = 'PAPER';
    if (playerScore === 5 || computerScore === 5) { 
    declareWinner();
    }
})
 

let scissors = document.querySelector('.scissors');
scissors.addEventListener('click', () => {
    playRound ('scissors', computerPlay());
    playerScoreOutput.innerHTML = `${playerScore}`;
    computerScoreOutput.innerHTML = `${computerScore}`;
    playerOutput.innerHTML = 'SCISSORS';
    if (playerScore === 5 || computerScore === 5) {
        declareWinner();
    }
})

let playerScoreOutput = document.querySelector('.player-score');

let computerScoreOutput = document.querySelector('.computer-score');

let computerOutput = document.querySelector('.computer-choice');

let playerOutput = document.querySelector('.player-choice');

let outcome = document.querySelector('.round-outcome');

