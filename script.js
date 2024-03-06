// Function to get the computer's choice
function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

// Function to play a single round
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (!["rock", "paper", "scissors"].includes(playerSelection)) {
        return "Invalid selection. Please choose rock, paper, or scissors.";
    }

    if (playerSelection === computerSelection.toLowerCase()) {
        return "It's a tie!";
    } else if (
        (playerSelection === "rock" && computerSelection.toLowerCase() === "scissors") ||
        (playerSelection === "paper" && computerSelection.toLowerCase() === "rock") ||
        (playerSelection === "scissors" && computerSelection.toLowerCase() === "paper")
    ) {
        return `You Win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}.`;
    }
} 

// Function to play the game
function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Enter your choice (rock, paper, or scissors):");
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        
        console.log(result);

        if (result.includes("Win")) {
            playerScore++;
        } else if (result.includes("Lose")) {
            computerScore++;
        }
    }

    console.log(`Final Score - Player: ${playerScore}, Computer: ${computerScore}`);

    if (playerScore > computerScore) {
        console.log("Congratulations! You win the game!");
    } else if (playerScore < computerScore) {
        console.log("Sorry! You lose the game!");
    } else {
        console.log("It's a tie!");
    }
}

// Start the game
playGame();

