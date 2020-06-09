const wallet = 50

const betNum = prompt("Welcome to the Keno game! You will start with $50, but could win up to $200! How much would you like to bet?")
  if (betNum) {
    alert(`Good luck!`)
  } 

const pickNums = prompt("Please choose a number between 1 and 15.")
  if (pickNums) {
    alert(`You chose ${pickNums}.`)
  }

let winningNum = Math.floor(Math.random() * 10 + 5)


if (pickNums == winningNum) {
  alert(`The winning number is ${winningNum}. Congrats, you won!`)
} else if (pickNums != winningNum) {
  alert(`I'm sorry, the winning number is ${winningNum}. You did not win this round.`) 
}


if (pickNums == winningNum) {
  const moreEarnings = Number(wallet) + Number(betNum)
  alert(`You now have $${moreEarnings}.`)
}

if (pickNums != winningNum) {
  const lostEarnings = wallet - betNum
  alert(`You now have $${lostEarnings}.`)
}



const cashOut = prompt("Want to play again?")
  if (cashOut == 'yes' | 'Yes') {
    alert('Great! Please pick another number.')
  } 
