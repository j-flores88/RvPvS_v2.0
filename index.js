// if($){
//     alert('Success!')
// }
let playerChoice
let createMessage = ''
let losses = 0
let wins = 0
let rounds = 0

const newGameBtn = document.getElementById('newGame');
const newSeriesBtn = document.getElementById('newSeries')
const disMsg = document.querySelector('span')

const userRock = document.getElementById('userRock')
const userPaper = document.getElementById('userPaper');
const userScissors = document.getElementById('userScissors')

const chooseTxt = document.getElementById('choose')

const compRock = document.getElementById('compRock');
const compPaper = document.getElementById('compPaper');
const compScissors = document.getElementById('compScissors');

const playerScore = document.getElementById('playerScore')
const compScore = document.getElementById('compScore')

userRock.onclick = function() {
  playerChoice = 'Rock'
  $(userPaper).fadeOut(500);
  $(userScissors).fadeOut(500);
  $(chooseTxt).fadeOut();

  $(newGameBtn).fadeIn(2000);
    return playRound(), roundScore()
}

userPaper.onclick = function() {
  playerChoice = 'Paper'
  $(userRock).fadeOut(500);
  $(userScissors).fadeOut(500);
  $(chooseTxt).fadeOut();

  $(newGameBtn).fadeIn(2000);
    return playRound(), roundScore()
}

userScissors.onclick = function() {
  playerChoice = 'Scissors'
  $(userPaper).fadeOut(500);
  $(userRock).fadeOut(500);
  $(chooseTxt).fadeOut();

  $(newGameBtn).fadeIn(2000);
    return playRound(), roundScore()
}

$(newGameBtn).hide();
$(newSeriesBtn).hide();
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

function roundScore() {
          
            if(createMessage.includes('you lose!')){
              losses +=1
              rounds += 1
              
              compScore.textContent = losses
            } else if(createMessage.includes('you win!')){
              wins +=1 
              rounds += 1
              
              playerScore.textContent = wins
            } else if(createMessage.includes('tie')){
              rounds += 1
              
            }   

            if(rounds === 5 && wins > losses) {

                $(newGameBtn).hide();
                disMsg.textContent = 'CONGRATULATIONS! YOU WON THE SERIES!'
                $(newSeriesBtn).fadeIn()
                newSeriesBtn.textContent = 'LETS GO AGAIN!'
            } else if(rounds === 5 && wins < losses) {

                $(newGameBtn).hide();
                disMsg.textContent = 'BOO! LOOKS LIKE THE COMPUTER TOOK THE SERIES!'
                $(newSeriesBtn).fadeIn()
                newSeriesBtn.textContent = 'TRY AGAIN!'
            } else if (rounds === 5 && wins === losses) {

                $(newGameBtn).hide();
                disMsg.textContent = 'SO CLOSE! LOOKS LIKE ITS A TIE!'
                $(newSeriesBtn).fadeIn()
                newSeriesBtn.textContent = 'TRY AGAIN!'
            }
    
}

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
newSeriesBtn.onclick = function() {
  $(chooseTxt).fadeIn();
  $(userScissors).fadeIn();
  $(userRock).fadeIn();
  $(userPaper).fadeIn();

  $(compRock).hide();
  $(compScissors).hide();
  $(compPaper).hide();
  $(disMsg).hide(); 
  $(newSeriesBtn).hide();

  rounds = 0;
  wins = 0;
  losses = 0;

  compScore.textContent = ''
  playerScore.textContent = ''
}