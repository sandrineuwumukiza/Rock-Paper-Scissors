

function getComputerChoice() {
    let randomChoiceArray  = ['Rock', 'Paper', 'Scissors'];
    let chosenChoice = Math.floor(Math.random() * randomChoiceArray.length);
    return randomChoiceArray[chosenChoice];
  }
//   console.log(getComputerChoice());
//   console.log(getComputerChoice());
//   console.log(getComputerChoice())
let playerScore = 0;
let computerScore = 0;

const PlayGround = (playerSelection,computerSelection) =>{
    console.log('1', playerSelection, '2', computerSelection)
    if(playerSelection === 'rock'&& computerSelection === 'rock'){
return'you tied!You both picked rock'
    }
    else if(playerSelection === 'Scissors'&& computerSelection === 'Scissors'){
        return 'You tied! You both picked scissors'
    }
    else if(playerSelection === 'Paper'&& computerSelection === 'Paper'){
return 'You tied! You both picked paper'
    }
    else if(playerSelection === 'Scissors'&& computerSelection === 'rock'){
        
        computerScore ++
        return 'You lost! Rock crushes scissors'
            } 
            else if(playerSelection === 'Scissors'&& computerSelection === 'Paper'){
                playerScore ++
                return 'You won! scissors cuts  paper'
                    }
                    else if(playerSelection === 'rock'&& computerSelection === 'Paper'){
                        computerScore ++
                        return 'You lost! paper cover rock'
                            }
                            else if(playerSelection === 'rock'&& computerSelection === 'Scissors'){
                                playerScore ++
                                return 'You won! Rock crushes scissors'
                                    }
                                    else if(playerSelection === 'Paper'&& computerSelection === 'Scissors'){
                                        computerScore ++
                                        return 'You lost! Scissors'
                                            }
                                    else if(playerSelection === 'Paper'&& computerSelection === 'rock'){
                                        playerScore ++
                                        return 'You won! Paper covers rock'
                                            }
}
const playerSelection = 'rock';
const computerSelection = getComputerChoice();
// console.log(PlayGround(playerSelection,computerSelection));


  function game(){
    for(let i=0;i<5; i++){
        const playerSelection = prompt('Choose what to throw', 'Rock,Paper,Scissors').toLowerCase()
        const computerSelection =getComputerChoice()
        PlayGround(playerSelection,computerSelection)
    }
    if(playerScore > computerScore){
        return 'You beat the computer! You are a geneous'
    }
    else if(playerScore < computerScore){
        return 'You got beat by the computer! Practice your throws!'
    }else{
        return 'You tied with the computer! Not too shabby'
    }
  }
  console.log(game())
