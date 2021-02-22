let playerChoice;
let createMessage = '';
let rounds = 0;

const newGameBtn = document.getElementById('newGame');
const newSeriesBtn = document.getElementById('newSeries');
const disMsg = document.querySelector('span');
const chooseTxt = document.getElementById('choose');
const compChoices = document.getElementById('compChoices');

const user = {
  rock: document.getElementById('userRock'),
  paper: document.getElementById('userPaper'),
  scissors: document.getElementById('userScissors'),
  score: document.getElementById('playerScore'),
  wins: 0
};

const comp = {
  rock: document.getElementById('compRock'),
  paper: document.getElementById('compPaper'),
  scissors: document.getElementById('compScissors'),
  score: document.getElementById('compScore'),
  wins: 0
};

user.rock.onclick = () => {
  playerChoice = 'Rock';
  userChoice(user.paper, user.scissors);
}

user.paper.onclick = () => {
  playerChoice = 'Paper';
  userChoice(user.rock, user.scissors);
}

user.scissors.onclick = () => {
  playerChoice = 'Scissors';
  userChoice(user.rock, user.paper);
}

const userChoice = (choice2, choice3) => {
  $(choice2).fadeOut(500);
  $(choice3).fadeOut(500);
  $(chooseTxt).fadeOut();
  $(newGameBtn).fadeIn(2000);
  return playRound(), roundScore()
}

const initialize = () => {
  $(compChoices).hide();
  $(newGameBtn).hide();
  $(newSeriesBtn).hide();
  $(comp.rock).hide();
  $(comp.paper).hide();
  $(comp.scissors).hide();
}

const playRound = () => {
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
      $(compChoices).show()
      $(comp.rock).fadeIn(1000);
    } else if (computerChoice === 'Paper') {
      $(compChoices).show()
      $(comp.paper).fadeIn(1000);
    } else if(computerChoice === 'Scissors') {
      $(compChoices).show()
      $(comp.scissors).fadeIn(1000);
    }
    return createMessage, alertMessage()
}

const alertMessage = () => {
  disMsg.textContent = createMessage
  $(disMsg).fadeIn(2000)   
}

const computerPlay = () => {
  let possOutcome = ['Rock', 'Paper', 'Scissors']
  let choice = Math.floor(Math.random() * 3)

  for (let i = 0; i < possOutcome.length; i++) {
    if(choice === i)
    return possOutcome[i]
  }
}

const roundScore = () => {   
  if(createMessage.includes('you lose!')){
    comp.wins +=1
    rounds += 1            
    comp.score.textContent = comp.wins
  } else if(createMessage.includes('you win!')){
    user.wins +=1 
    rounds += 1           
    user.score.textContent = user.wins
  } else if(createMessage.includes('tie')){
    rounds += 1             
  }   

  if(rounds === 5 && user.wins > comp.wins) {
    newSeries('CONGRATULATIONS! YOU WON THE SERIES!', 'LETS GO AGAIN!')
  } else if(rounds === 5 && user.wins < comp.wins) {
    newSeries('BOO! LOOKS LIKE THE COMPUTER TOOK THE SERIES!', 'TRY AGAIN!')
  } else if (rounds === 5 && user.wins === comp.wins) {
    newSeries('SO CLOSE! LOOKS LIKE ITS A TIE!', 'TRY AGAIN!')
  }  
}

const newSeries = (displayMsg, btnMsg) => {
  $(newGameBtn).hide();
  $(newSeriesBtn).fadeIn()
  disMsg.textContent = displayMsg;
  newSeriesBtn.textContent = btnMsg;
}

newGameBtn.onclick = () => {
  clearBoard();
  $(newGameBtn).fadeOut(10)
}

newSeriesBtn.onclick = () => {
  clearBoard();
  $(newSeriesBtn).hide();
  
  rounds = 0;
  user.wins = 0;
  comp.wins = 0;

  comp.score.textContent = '-'
  user.score.textContent = '-'
}

const clearBoard = () => {
  $(chooseTxt).fadeIn();
  $(user.scissors).fadeIn();
  $(user.rock).fadeIn();
  $(user.paper).fadeIn();

  $(compChoices).hide()
  $(comp.rock).hide();
  $(comp.scissors).hide();
  $(comp.paper).hide();
  $(disMsg).hide(); 
}

initialize()