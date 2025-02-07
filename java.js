
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

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        playRound(e.target.textContent);
    })
})

let humanScore = 0;
let computerScore = 0;

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

function playRound(humanChoice) {

    const computerChoice = getComputerChoice();

    let round = humanChoice.charAt(0) + computerChoice.charAt(0);
    console.log(humanChoice, " vs ", computerChoice);

    if (round === "PR" || round === "SP" || round === "RS") {

        console.log(`You win! ${humanChoice} beats ${computerChoice}!`);

        scoreKeeper('human');

    }
    else if (round === "RP" || round === "PS" || round === "SR") {

        console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);

        scoreKeeper('pc');
    }
    else {
        console.log("It's a tie");

        scoreKeeper('');
    }
};

function scoreKeeper(winner) {

    if (winner === 'human') {
        humanScore += 1;
        console.log(`[You: ${humanScore} | Computer: ${computerScore}]`)
    }
    else if (winner === 'pc') {
        computerScore += 1;
        console.log(`[You: ${humanScore} | Computer: ${computerScore}]`)
    } else { console.log(`[You: ${humanScore} | Computer: ${computerScore}]`) };

    if (computerScore == 5 || humanScore == 5) {
        console.log("end game");
    };
}