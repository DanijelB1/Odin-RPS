function computerPlay() {
    const rockPaperScissorsPick = ['rock', 'paper', 'scissors'];
    const valueToUse = rockPaperScissorsPick[Math.floor(Math.random() * rockPaperScissorsPick.length)];            
    console.log('Computer chose: ' + valueToUse);
    return valueToUse;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log('Oh no! A tie');
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log('You Win! Rock beats Scissors');
        ++playerScore;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log('You Win! Scissors beat Paper');
        ++playerScore;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log('You Win! Paper beats Rock');
        ++playerScore;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        console.log('You Lose! Rock beats Scissors');
        ++computerScore;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        console.log('You Lose! Scissors beats Paper');
        ++computerScore;
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        console.log('You Lose! Paper beats Rock');
        ++computerScore;
    }
}

function playerInput() {
    const ask = prompt('Rock, Paper or Scissors?');
    console.log('You chose: ' + ask)
    return ask
}

// function game() {                                                    //Play exactly 5 rounds
    
//     while (playerScore < 5 && computerScore < 5) {
//         playRound(playerInput(), computerPlay());
//         console.log(playerScore, computerScore);
//     }
//     declareWinner()
// }

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
    score.innerHTML = 'Player score: ' + `${playerScore}` + '<br />' + 'Computer score: ' + `${computerScore}`;
    if (playerScore === 5 || computerScore === 5) {
        declareWinner();
    }
})
 

let paper = document.querySelector('.paper');
paper.addEventListener('click', () => {
    playRound ('paper', computerPlay());
    score.innerHTML = 'Player score: ' + `${playerScore}` + '<br />' + 'Computer score: ' + `${computerScore}`;
    if (playerScore === 5 || computerScore === 5) {
        declareWinner();
    }
})
 

let scissors = document.querySelector('.scissors');
scissors.addEventListener('click', () => {
    playRound ('scissors', computerPlay());
    score.innerHTML = 'Player score: ' + `${playerScore}` + '<br />' + 'Computer score: ' + `${computerScore}`;
    if (playerScore === 5 || computerScore === 5) {
        declareWinner();
    }
})

let score = document.querySelector('.score');
//score.text = 'Player score: ' + `${playerScore}` + '<br />' + 'Computer score: ' + `${computerScore}`;

