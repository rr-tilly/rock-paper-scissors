
//function that randomly returns “rock”, “paper” or “scissors” for Computer's Choice
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

//a function that takes the user choice and returns it
// function getHumanChoice() {

//     const humanChoice = createButtons();

//     switch (humanChoice) {
//         case 'Rock':
//             return 'Rock';
//             break;
//         case 'paper' || 'papers':
//             return 'Paper';
//             break;
//         case 'scissors' || 'scissors':
//             return 'Scissors';
//             break;
//     }

// }

//create button for player selection
function createButtons() {
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

    rockButton.addEventListener("click", (e) => console.log(e.target.textContent));
    paperButton.addEventListener("click", (e) => console.log(e.target.textContent));
    scissorsButton.addEventListener("click", (e) => console.log(e.target.textContent));

}

function playRound() {

    const humanChoice = createButtons();
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

createButtons();
// plays 5 rounds
// function playGame() {
//     // global variables to initialize player scores at 0;
//     let humanScore = 0;
//     let computerScore = 0;

//     for (let i = 1; i <= 5; i++) {

//         console.log(`Round ${i}`);
//         const humanSelection = getHumanChoice();
//         const computerSelection = getComputerChoice();

//         let winner = playRound(humanSelection, computerSelection);
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