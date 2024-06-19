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