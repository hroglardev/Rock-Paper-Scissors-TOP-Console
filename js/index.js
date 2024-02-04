'use strict'

window.addEventListener('load', () => {
  const getComputerChoice = () => {
    let choice = Math.ceil(Math.random() * 3)
    if (choice === 1) return 'Rock'
    else if (choice === 2) return 'Paper'
    else return 'Scissors'
  }

  const playRound = (playerSelection, computerSelection) => {
    switch (true) {
      case playerSelection === computerSelection:
        return "It's a tie"

      case playerSelection === 'rock' && computerSelection === 'scissors':
        return 'You win! Rock beats Scissors'

      case playerSelection === 'rock' && computerSelection === 'paper':
        return 'You lose! Paper beats rock'

      case playerSelection === 'paper' && computerSelection === 'rock':
        return 'You win! Paper beats rock'

      case playerSelection === 'paper' && computerSelection === 'scissors':
        return 'You lose! Scissors beats paper'

      case playerSelection === 'scissors' && computerSelection === 'paper':
        return 'You win! Scissors beats paper'

      case playerSelection === 'scissors' && computerSelection === 'rock':
        return 'You lose! Rock beats Scissors'

      default:
        return 'Invalid Selection'
    }
  }

  const ROCK = 'Rock'
  const PAPER = 'Paper'
  const SCISSORS = 'Scissors'
  let myScore = 0
  let computerScore = 0

  const playGame = () => {
    while (myScore < 5 && computerScore < 5) {
      let myChoice = prompt('Choose Rock, Paper or Scissors').toLowerCase()
      while (myChoice !== ROCK.toLowerCase() && myChoice !== PAPER.toLowerCase() && myChoice !== SCISSORS.toLowerCase()) {
        console.log('You must choose among Rock, Paper or Scissors')
        myChoice = prompt('You must choose among Rock, Paper or Scissors')
      }

      let pcChoice = getComputerChoice().toLowerCase()
      let result = playRound(myChoice, pcChoice)
      if (result.includes('You lose')) {
        computerScore++
        console.log(`${result}. Your score is ${myScore} and computer's is ${computerScore}`)
      } else if (result.includes('You win')) {
        myScore++
        console.log(`${result}. Your score is ${myScore} and computer's is ${computerScore}`)
      } else {
        console.log(`${result}. Your score is ${myScore} and computer's is ${computerScore}`)
        continue
      }
    }

    if (myScore === 5) {
      console.log('Congrats you won the game')
    } else {
      console.log('You lost the game')
    }
  }

  playGame()
})
