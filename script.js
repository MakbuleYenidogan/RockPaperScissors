const playerTurn = document.getElementById('playerTurn');
const playerScore = document.getElementById('playerScore');
const computerTurn = document.getElementById('computerTurn');
const computerScore = document.getElementById('computerScore');

const playerRock = document.getElementById('playerRock');
const playerPaper = document.getElementById('playerPaper');
const playerScissors = document.getElementById('playerScissors');

const computerRock = document.getElementById('computerRock');
const computerPaper = document.getElementById('computerPaper');
const computerScissors = document.getElementById('computerScissors');

const resultText = document.getElementById('resultText');

const allGameIcons = document.querySelectorAll('.icon');

const choices = {
  rock: { name: 'Rock', win: ['scissors'] },
  paper: { name: 'Paper', win: ['rock'] },
  scissors: { name: 'Scissors', win: ['paper'] },
};

let playerScoreNumber = 0;
let computerScoreNumber = 0;
let computerChoice = '';

function resetSelected() {
  allGameIcons.forEach((icon) => {
    icon.classList.remove('selected');
    stopConfetti();
    removeConfetti();
  });
}
function computerRandomChoice() {
  const computerChoiceNumber = Math.random();
  // console.log(computerChoiceNumber);
  if (computerChoiceNumber < 0.3) {
    computerChoice = 'rock';
  } else if (computerChoiceNumber <= 0.65) {
    computerChoice = 'paper';
  } else if (computerChoiceNumber <= 1) {
    computerChoice = 'scissors';
  }
}

function displayComputerChoice() {
  switch (computerChoice) {
    case 'rock':
      computerRock.classList.add('selected');
      computerTurn.textContent = ' --- Rock';
      break;
    case 'paper':
      computerPaper.classList.add('selected');
      computerTurn.textContent = ' --- Paper';
      break;
    case 'scissors':
      computerScissors.classList.add('selected');
      computerTurn.textContent = ' --- Scissors';
      break;
  }
}


function resetAll(){
  playerScoreNumber=0;
  computerScoreNumber=0;
  playerScore.textContent = playerScoreNumber;
  computerScore.textContent = computerScoreNumber;
  playerTurn.textContent = '';
  computerTurn.textContent = '';
  resultText.textContent = '';
  resetSelected();
}

//https://www.cssscript.com/demo/confetti-falling-animation/ konfeti animasyonu için site

function updateScore(playerChoice) {
  // console.log(playerChoice, computerChoice);
  if (playerChoice === computerChoice) {
    resultText.textContent = 'scoreless.';
  } else {
    const choice = choices[playerChoice];
    console.log(choice);
    console.log(choice.win.indexOf(computerChoice));
    if (choice.win.indexOf(computerChoice) === 0) {
      playerScoreNumber++;
      resultText.textContent = 'You Win!';
      playerScore.textContent = playerScoreNumber;
      startConfetti();
    } else {
      computerScoreNumber++;
      resultText.textContent = 'You Lose!';
      computerScore.textContent = computerScoreNumber;
    }
  }
}

function checkResult(playerChoice) {
  resetSelected();
  computerRandomChoice();
  displayComputerChoice();
  updateScore(playerChoice);
}ss

function select(playerChoice) {
  // console.log(playerChoice);

  checkResult(playerChoice);

  switch (playerChoice) {
    case 'rock':
      playerRock.classList.add('selected');
      playerTurn.textContent = ' --- Rock';
      break;
    case 'paper':
      playerPaper.classList.add('selected');
      playerTurn.textContent = ' --- Paper';
      break;
    case 'scissors':
      playerScissors.classList.add('selected');
      playerTurn.textContent = ' --- Scissors';
      break;
  }
}
