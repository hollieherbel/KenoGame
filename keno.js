const wallet = 50

const kenoWelcome = prompt("Welcome to the Keno game! You will start with $50! Are you ready to play?")
  if (kenoWelcome == 'yes' | 'Yes') {
    alert('Great! Good Luck!')
  }
  
do {

const betNum = prompt("How much would you like to bet?")

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

const moreEarnings = Number(wallet) + Number(betNum)
const lostEarnings = wallet - betNum

if (pickNums == winningNum) {
  alert(`You now have $${moreEarnings}.`)
}

if (pickNums != winningNum) {
  alert(`You now have $${lostEarnings}.`)
}

const keepPlaying = prompt("Want to play again?")
  if (keepPlaying == 'yes' | 'Yes')  {
    alert('Great!')
  } 
  
  if (keepPlaying != 'yes' | 'Yes' && pickNums == winningNum) {
    alert(`Thanks for playing. You will go home with $${moreEarnings}.`)
  } else if (keepPlaying != 'yes' | 'Yes' && pickNums != winningNum) {
    alert(`Thanks for playing. You will go home with $${lostEarnings}.`)
  } 

  if (keepPlaying == 'no' | 'No') {
    break;
  }

} while (true);
