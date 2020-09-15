// if($){
//     alert('Success!')
// }
let playerChoice = ''
let createMessage = ''

const newGameBtn = document.getElementById('newGame');
const disMsg = document.querySelector('span')
const selectBtn = document.getElementById('select')
const userInput = document.querySelector('input');

$(newGameBtn).hide();

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

      return createMessage, alertMessage()
}
function alertMessage() {
       
    if(createMessage !== 'Please make a proper selection.') {
        $(selectBtn).fadeOut(100)
        $(newGameBtn).fadeIn(700)  

        disMsg.textContent = createMessage;
        $(disMsg).fadeIn(100)
    } else {
        disMsg.textContent = createMessage
        $(disMsg).fadeIn(200)
    }
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



selectBtn.onclick = function() {
    const inputVal = userInput.value;
    userInput.value = '';

    if(inputVal.toLowerCase() !== 'rock' && inputVal.toLowerCase() !== 'paper' && inputVal.toLowerCase() !== 'scissors') {
        createMessage = 'Please make a proper selection.'
    } else {
        playerChoice = inputVal.substring(0, 1).toUpperCase() + inputVal.substring(1);
    }
    return playRound()
}

newGameBtn.onclick = function() {
    playerChoice = ''; 

    $(disMsg).fadeOut(50)
    $(selectBtn).fadeIn(800)
    $(newGameBtn).fadeOut(100)
}
