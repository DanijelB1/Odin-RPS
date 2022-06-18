function computerPlay() {
    const rockPaperScissorsPick = ['rock', 'paper', 'scissors'];
    const valueToUse = rockPaperScissorsPick[Math.floor(Math.random() * rockPaperScissorsPick.length)]
    return valueToUse
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    
    if (playerSelection === computerSelection) {
        console.log('Oh no! A tie');
        return 'tie'
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log('You Win! Rock beats Scissors');
        return 'player';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log('You Win! Scissors beat Paper');
        return 'player';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log('You Win! Paper beats Rock');
        return 'player';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        console.log('You Lose! Rock beats Scissors');
        return 'computer';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        console.log('You Lose! Scissors beats Paper');
        return 'computer';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        console.log('You Lose! Paper beats Rock');
        return 'computer';
    }
    
}


function game() {
    
    let result = playRound(playerSelection, computerSelection);
    
    
    for (let i = 0; i < 5; i++) {
        playRound(playerSelection, computerSelection);
        
        if (result === 'player') {
            ++playerScore;
        } else if (result === 'computer') {
            ++computerScore
        }
        
        console.log(playerScore, computerScore)
    }
}

let playerScore = 0
let computerScore = 0

let computerSelection = computerPlay();
const playerSelection = 'scissors';


game();