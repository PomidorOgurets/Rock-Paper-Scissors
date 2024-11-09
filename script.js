function getComputerChoice() {
    let randomNumber = Math.random();
    if (randomNumber <= 0.3333) {
        return "rock"
    } else if (randomNumber <= 0.6666) {
        return "paper"
    } else {
        return "scissors"
    }
}

function getHumanChoice () {
    return prompt("Choose rock, paper or scissors")
}

let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice, computerChoice) {
    let humanChoice_lower = humanChoice.toLowerCase();
    let computerChoice_lower = computerChoice.toLowerCase();
    if (humanChoice_lower === computerChoice_lower) {
        return ('Tie!!!')
    } else if (humanChoice_lower == 'rock') {
        return (computerChoice_lower =='paper') ? 'You Lose! Paper beats Rock!' : 'You Won! Rock beats Scissors!'
    } else if (humanChoice_lower == 'scissors') {
        return (computerChoice_lower =='rock') ? 'You Lose! Rock beats Scissors!' : 'You Won! Scissors beats Paper!'
    } else if (humanChoice_lower == 'paper') {
        return (computerChoice_lower =='scissors') ? 'You Lose! Scissors beats Paper!' : 'You Won! Paper beats Rock!'
    }
}

function playGame () {
    for (let i = 0; i <= 4; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        result = playRound(humanSelection, computerSelection)
        console.log(result)
        if (result[4] == 'L') {
            computerScore++;
        } else if (result[4] == 'W') {
            humanScore++;
        }
    }
    console.log('Human Score ',humanScore, ' : ', computerScore, ' Computer Score')
}

playGame()