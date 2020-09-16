// if($){
//     alert('Success!')
// }
let playerChoice
let createMessage = ''

const newGameBtn = document.getElementById('newGame');
const disMsg = document.querySelector('span')

const userRock = document.getElementById('userRock')
const userPaper = document.getElementById('userPaper');
const userScissors = document.getElementById('userScissors')

const chooseTxt = document.getElementById('choose')

const compRock = document.getElementById('compRock');
const compPaper = document.getElementById('compPaper');
const compScissors = document.getElementById('compScissors');


userRock.onclick = function() {
  playerChoice = 'Rock'
  
  $(userPaper).fadeOut(500);
  $(userScissors).fadeOut(500);
  $(chooseTxt).fadeOut();

  $(newGameBtn).fadeIn(2000);

  playRound()
}

userPaper.onclick = function() {
  playerChoice = 'Paper'
  
  $(userRock).fadeOut(500);
  $(userScissors).fadeOut(500);
  $(chooseTxt).fadeOut();

  $(newGameBtn).fadeIn(2000);

  playRound()
}

userScissors.onclick = function() {
  playerChoice = 'Scissors'
  
  $(userPaper).fadeOut(500);
  $(userRock).fadeOut(500);
  $(chooseTxt).fadeOut();

  $(newGameBtn).fadeIn(2000);

  playRound()
}

$(newGameBtn).hide();
$(compRock).hide();
$(compPaper).hide();
$(compScissors).hide();

function playRound() {
    let computerChoice = computerPlay()



    if(computerChoice === playerChoice) {
        createMessage = computerChoice + ' vs ' + playerChoice + ', it\'s a tie!';
      } else if (computerChoice === 'Rock' && playerChoice === 'Paper') {
        createMessage = playerChoice + ' beats ' + computerChoice + ', you win!'
      } else if (computerChoice === 'Rock' && playerChoice === 'Scissors') {
        createMessage = computerChoice + ' beats ' + playerChoice + ', you lose!'
      } else if (computerChoice === 'Paper' && playerChoice === 'Rock') {
        createMessage = computerChoice + ' beats ' + playerChoice + ', you lose!'
      } else if (computerChoice === 'Paper' && playerChoice === 'Scissors') {
        createMessage = playerChoice + ' beats ' + computerChoice + ', you win!'
      } else if (computerChoice === 'Scissors' && playerChoice === 'Rock') {
        createMessage = playerChoice + ' beats ' + computerChoice + ', you win!'
      } else if (computerChoice === 'Scissors' && playerChoice === 'Paper') {
        createMessage = computerChoice + ' beats ' + playerChoice + ', you lose!'
      } else if (playerChoice !== 'Rock' && playerChoice !== 'Paper' && playerChoice !== 'Scissors') {
        createMessage = 'Please make a proper selection.'
      }

      if(computerChoice === 'Rock') {
        $(compRock).fadeIn(1000);
      } else if (computerChoice === 'Paper') {
        $(compPaper).fadeIn(1000);
      } else if(computerChoice === 'Scissors') {
        $(compScissors).fadeIn(1000);
      }

      return createMessage, alertMessage()
}
function alertMessage() {
        disMsg.textContent = createMessage
        $(disMsg).fadeIn(2000)
    
}

function getRanNum() {
  let ranNum = Math.floor(Math.random() * 3)
  return ranNum;
}

function computerPlay() {
  let possOutcome = ['Rock', 'Paper', 'Scissors']
  let choice = getRanNum()

  for (let i = 0; i < possOutcome.length; i++) {
    if(choice === i)
    return possOutcome[i]
  }
}

function gameScore() {
  compScore = 0;
  userScore = 0;

  
}

// selectBtn.onclick = function() {
//     const inputVal = userInput.value;
//     userInput.value = '';

//     if(inputVal.toLowerCase() !== 'rock' && inputVal.toLowerCase() !== 'paper' && inputVal.toLowerCase() !== 'scissors') {
//         createMessage = 'Please make a proper selection.'
//     } else {
//         playerChoice = inputVal.substring(0, 1).toUpperCase() + inputVal.substring(1);
//     }
//     return playRound()
// }

newGameBtn.onclick = function() {
  $(chooseTxt).fadeIn();
  $(userScissors).fadeIn();
  $(userRock).fadeIn();
  $(userPaper).fadeIn();

  $(compRock).hide();
  $(compScissors).hide();
  $(compPaper).hide();

  $(newGameBtn).fadeOut(100)
  $(disMsg).hide();
    
}
