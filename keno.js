const wallet = 50

const welcome = prompt("Welcome to the Keno game! Are you ready to play?")
  if (welcome == 'yes') {
    alert('Great!')
  } 

const pickNums = prompt("You will start with $50, but could win up to $200! Please choose one number from 1 to 15.")
  if (pickNums) {
    alert(`You chose ${pickNums}.`)
  }

let winningNum = Math.floor(Math.random() * 10 + 5)


if (pickNums == winningNum) {
  alert(`The winning number is ${winningNum}. Congrats, you won $50! Pick another number.`)
} else if (pickNums != winningNum) {
  alert(`I'm sorry, the winning number is ${winningNum}. You did not win this round. Choose another number.`)
} 

const earnings = wallet + 50

if (pickNums == winningNum) {
  alert(`You now have $${earnings}`)
}
