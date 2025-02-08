let humanScore = 0;
let computerScore = 0;

const mainDiv = document.createElement("div");
const humanScoreBoard = document.createElement("div");
const computerScoreBoard = document.createElement("div");

const humanScoreLabel = document.createElement("h3");
humanScoreLabel.textContent = "HUMAN"
const computerScoreLabel = document.createElement("h3");
computerScoreLabel.textContent = "COMPUTER"

const humanScoreText = document.createElement("h5");
humanScoreText.style.textAlign = "center"
const computerScoreText = document.createElement("h5");
computerScoreText.style.textAlign = "center"

humanScoreText.textContent = humanScore;
computerScoreText.textContent = computerScore;

humanScoreBoard.appendChild(humanScoreLabel);
humanScoreBoard.appendChild(humanScoreText);

computerScoreBoard.appendChild(computerScoreLabel);
computerScoreBoard.appendChild(computerScoreText);

const vsLabel = document.createElement("h5")
vsLabel.textContent = "VS";
vsLabel.style.padding = "0px 20px"

mainDiv.style.display = "flex";
mainDiv.style.justifyContent = "center";

mainDiv.appendChild(humanScoreBoard);
mainDiv.appendChild(vsLabel);
mainDiv.appendChild(computerScoreBoard);

document.body.appendChild(mainDiv);

//create button for player selection
const buttonHolder = document.createElement("div")

const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorsButton = document.createElement("button");

rockButton.textContent = "Rock";
paperButton.textContent = "Paper";
scissorsButton.textContent = "Scissors";

buttonHolder.appendChild(rockButton);
buttonHolder.appendChild(paperButton);
buttonHolder.appendChild(scissorsButton);

document.body.appendChild(buttonHolder);
buttonHolder.style.textAlign = "center";

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.setAttribute(
        "style",

        "width: 100px; " +
        "font-size: 16px; " +
        "padding: 10px 20px; " +
        "border-radius: 5px; " +
        "margin: 20px; "
    );

    button.addEventListener("click", (e) => {
        playRound(e.target.textContent);
    })
})

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
        humanScoreText.textContent = humanScore;
        console.log(`[You: ${humanScore} | Computer: ${computerScore}]`)
    }
    else if (winner === 'pc') {
        computerScore += 1;
        computerScoreText.textContent = computerScore;
        console.log(`[You: ${humanScore} | Computer: ${computerScore}]`)
    } else { console.log(`[You: ${humanScore} | Computer: ${computerScore}]`) };

    if (computerScore == 5 || humanScore == 5) {
        console.log("end game");
    };
}


