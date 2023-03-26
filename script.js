const container = document.querySelector('#container');

const rock = document.createElement('button');
rock.classList.add('rock');
rock.textContent = "Rock";
container.appendChild(rock);

const paper = document.createElement('button');
paper.classList.add('paper');
paper.textContent = "Paper";
container.appendChild(paper);

const scissors = document.createElement('button');
scissors.classList.add('scissors');
scissors.textContent = "Scissors";
container.appendChild(scissors);

const outcomeDiv = document.querySelector('.outcome');
let playerScore = 0;
let computerScore = 0;

const computerChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    const randomNum = Math.floor(Math.random() * choices.length);
    return choices[randomNum];
}

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        return "It's a draw!";
    }
    else if ((playerSelection === "rock") && (computerSelection === "paper")) {
        computerScore++;
        return "Ouch! Paper beats Rock..";
    }
    else if ((playerSelection === "rock") && (computerSelection === "scissors")) {
        playerScore++;
        return "You win! Rock beats Scissors..";
    }
    else if ((playerSelection === "paper") && (computerSelection === "rock")) {
        playerScore++;
        return "You win! Paper beats Rock..";
    }
    else if ((playerSelection === "paper") && (computerSelection === "scissors")) {
        computerScore++;
        return "Ouch! Scissors beats Paper..";
    }
    else if ((playerSelection === "scissors") && (computerSelection === "rock")) {
        computerScore++;
        return "Ouch! Rock beats Scissors..";
    }
    else if ((playerSelection === "scissors") && (computerSelection === "paper")) {
        playerScore++;
        return "You win! Scissors beats Paper";
    }
    
}


rock.addEventListener('click', () => {
    const computerSelection = computerChoice();
    const playerSelection = 'rock';
    playRound(playerSelection, computerSelection);
    console.log("Yep");
})

scissors.addEventListener('click', () => {
    const computerSelection = computerChoice();
    const playerSelection = 'scissors';
    playRound(playerSelection, computerSelection);
    console.log("Yep");
})

paper.addEventListener('click', () => {
    const computerSelection = computerChoice();
    const playerSelection = 'paper';
    playRound(playerSelection, computerSelection);
    console.log("Yep");
})

















container.addEventListener('click', function (e) {
    console.log(e.target);
    
    if (e.target == rock) {
        playerSelection = "rock";
        console.log("You chose Rock!");
    }
    else if (e.target == paper) {
        console.log("You chose Paper!")
    }
    else if (e.target == scissors) {
        console.log("You chose Scissors!");
    }
    else {
        console.log("no");
    }
    
})




















