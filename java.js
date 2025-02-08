let humanScore = 0;
let computerScore = 0;

const mainDiv = document.createElement("div");
const humanScoreBoard = document.createElement("div");
const computerScoreBoard = document.createElement("div");

const humanScoreLabel = document.createElement("h3");
humanScoreLabel.textContent = "HUMAN"
const computerScoreLabel = document.createElement("h3");
computerScoreLabel.textContent = "COMPUTER"

const humanScoreText = document.createElement("h4");
humanScoreText.style.textAlign = "center"
const computerScoreText = document.createElement("h4");
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


const gameDisplay = document.createElement("div");

const humanVsPCChoiceDisplay = document.createElement("p");
humanVsPCChoiceDisplay.textContent = "Rock, Paper or Scissors?";
humanVsPCChoiceDisplay.style.textAlign = "center";

const resultDisplay = document.createElement("p")
resultDisplay.textContent = "Human vs Computer";
resultDisplay.style.textAlign = "center";

gameDisplay.appendChild(humanVsPCChoiceDisplay);
gameDisplay.appendChild(resultDisplay);

document.body.appendChild(mainDiv);
document.body.appendChild(gameDisplay);

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
    humanVsPCChoiceDisplay.textContent = humanChoice + " vs " + computerChoice;

    if (round === "PR" || round === "SP" || round === "RS") {

        resultDisplay.textContent = `You win! ${humanChoice} beats ${computerChoice}!`;

        scoreKeeper('human');

    }
    else if (round === "RP" || round === "PS" || round === "SR") {

        switch (round) {
            case "RP":
                resultDisplay.textContent = `You lose! Rock gets covered by Paper!`;
            case "PS":
                resultDisplay.textContent = `You lose! Paper gets cut by Scissors!`;
            case "SR":
                resultDisplay.textContent = `You lose! Scissors gets crushed by Rocks!`;
        }

        scoreKeeper('pc');
    }
    else {
        resultDisplay.textContent = "It's a tie!";
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
        if (humanScore === 5) endGame("human")
        else endGame("computer");
    };
}


function endGame(winner) {

    let declaration = "";
    if (winner === "human") {
        declaration = "Congratulations! You have won the game."
    } else { declaration = "You have lost..." };

    let endGameDiv = document.createElement("div");
    endGameDiv.setAttribute(
        "style",

        `
        position: absolute;
        border: 2px solid black;
        background-color: gainsboro;
        z-index: 10;
        border-radius: 10px;
        width: 400px;
        margin: 10px auto;
    padding: 10px;    
        top: 60px;
        left: 0;
        right: 0;
        text-align: center;
        `
    );

    const decHeader = document.createElement("h3");
    decHeader.textContent = declaration;
    endGameDiv.appendChild(decHeader);

    const restart = document.createElement("button");
    restart.style.marginBottom = "18.72px"
    restart.textContent = "Play Again"

    endGameDiv.appendChild(restart);

    restart.addEventListener("click", () => {

        document.body.removeChild(endGameDiv);
        humanScore = 0;
        computerScore = 0;
        humanVsPCChoiceDisplay.textContent = "Rock, Paper or Scissors?";
        resultDisplay.textContent = "Human vs Computer";
        console.log("new game");
    })

    document.body.appendChild(endGameDiv);
}

