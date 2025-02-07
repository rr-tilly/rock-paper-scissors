
//create button for player selection
const buttonHolder = document.createElement("div")

const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorsButton = document.createElement("button");

rockButton.textContent = "Rock";
paperButton.textContent = "Paper";
scissorsButton.textContent = "Scissors";

document.body.appendChild(buttonHolder);
buttonHolder.appendChild(rockButton);
buttonHolder.appendChild(paperButton);
buttonHolder.appendChild(scissorsButton);

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    switch (computerChoice) {
        case 0:
            return 'Rock';
            break;
        case 1:
            return 'Paper';
            break;
        case 2:
            return 'Scissors';
            break;
    }
}

function playRound() {

    const humanChoice = getHumanChoice();
    console.log(humanChoice);

    const computerChoice = getComputerChoice();

    let round = humanChoice.charAt(0) + computerChoice.charAt(0);
    console.log(humanChoice, " vs ", computerChoice);

    if (round === "PR" || round === "SP" || round === "RS") {

        console.log(`You win! ${humanChoice} beats ${computerChoice}!`);

        return 'human';
    }
    else if (round === "RP" || round === "PS" || round === "SR") {

        console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);

        return 'pc';
    }
    else {
        console.log("It's a tie");

        return '';
    }
};

// function playGame() {

//     let humanScore = 0;
//     let computerScore = 0;

//     for (let i = 1; i <= 5; i++) {

//         console.log(`Round ${i}`);

//         let winner = playRound();
//         if (winner === 'human') {
//             humanScore += 1;
//             console.log(`[You: ${humanScore} | Computer: ${computerScore}]`)
//         }
//         else if (winner === 'pc') {
//             computerScore += 1;
//             console.log(`[You: ${humanScore} | Computer: ${computerScore}]`)
//         } else { console.log(`[You: ${humanScore} | Computer: ${computerScore}]`) };

//         if (i == 5) {
//             if (humanScore > computerScore) { console.log("You have won the game!") }
//             else if (humanScore < computerScore) { console.log("You have lost the game") }
//             else { (console.log("It's a tie!")) };
//         };
//     }
// }
