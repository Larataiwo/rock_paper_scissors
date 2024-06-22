function getComputerChoice() {
    const choice = ["rock", "paper", "scissors"];
    let randomChoice = choice[Math.floor(Math.random()*choice.length)];
    return randomChoice;
}

function getHumanChoice() {
    let input = prompt("Enter rock, paper or scissors");
    let humanInput = input.toLowerCase();
    const choice = ["rock","paper","scissors"];
    if(humanInput == choice[0] || humanInput == choice[1] || humanInput == choice[2]) {
        return humanInput; 
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


    let humanScore = 0;
    let computerScore = 0;

    function playGame() {
    console.log("Welcome");
   for(let i = 0; i < 5; i++) {

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
   } 
   if(humanScore > computerScore) {
    console.log(`You win! You win by ${humanScore - computerScore} points` );

   } else if(humanScore < computerScore) {
    console.log(`You lose. You lose by ${computerScore - humanScore} points`);

   } else if(humanScore == computerScore){
    console.log("You Draw");
   }
  } 

   playGame(); 

