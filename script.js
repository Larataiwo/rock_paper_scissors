function getComputerChoice() {
    const choice = ["rock", "paper", "scissors"];
    let randomChoice = choice[Math.floor(Math.random()*choice.length)];
    return randomChoice;
}

function getHumanChoice() {
    let input = prompt("Enter rock, paper or scissors");
    const choice = ["rock","paper","scissors"];
    if(input == choice[0] || input == choice[1] || input == choice[2]) {
        return input;
    }
}

function playRound(humanChoice, computerChoice) {
    if((humanChoice == "rock" && computerChoice == "scissors") || 
    (humanChoice == "scissors" && computerChoice == "paper") || 
    (humanChoice == "paper" && computerChoice == "rock")) {
        humanScore++;
            console.log(`You win! ${humanChoice} beats ${computerChoice} `);
    
    } else if  ((computerChoice == "rock" && humanChoice == "scissors") || 
    (computerChoice == "scissors" && humanChoice == "paper") || 
    (computerChoice == "paper" && humanChoice == "rock")) {
           computerScore++;
            console.log(`You lose. ${computerChoice} beats ${humanChoice} `);
        
    } else if((computerChoice == "rock" && humanChoice == "rock") || 
    (computerChoice == "paper" && humanChoice == "paper") ||
    (computerChoice == "scissors" && humanChoice == "scissors")){
            console.log(`It's a tie! ${humanChoice} is the same as ${computerChoice} `);
        }
    } 