const welcome = prompt("Welcome to the Keno game! Are you ready to play?")
  if (welcome == 'yes') {
    alert('Great!')
  }

const pickNums = prompt("You can win up to $200.  Please choose one number from 1 to 15.")
  if (pickNums) {
    alert(`You chose ${pickNums}.`)
  }

const winningNum = Math.floor(Math.random() * 10 + 5)

const matchNum = prompt(`The winning number is ${winningNum}.`)
  if (pickNums == winningNum) {
    alert('Congrats, you won $20! Pick another number.')
  } else if (pickNums != winningNum) {
    alert("I'm sorry, you did not win this round. Choose another number.")
  }