const buttons = document.querySelectorAll('button')
const resultLabel = document.getElementById('result')
const userChoiceLabel = document.getElementById('playerChoice')
const computerChoiceLabel = document.getElementById('computerChoice')

userChoice()

function userChoice() {
    buttons.forEach(button=>{
        button.onclick = (e) => {
            console.log("user choice", e.target.value)
            game_result(e.target.value)
        }
    })
}

function game_result(userChoice) {
    compChoice = computerChoice()
    userChoiceLabel.textContent = "User: " + userChoice
    computerChoiceLabel.textContent = "Computer: " + compChoice

    if( userChoice == compChoice ) {
        resultLabel.textContent = "Draw"
    } else if( (userChoice=="rock" && compChoice=="paper") 
    || (userChoice=="paper" && compChoice=='scissor')
    || (userChoice=='scissor' && compChoice=='rock')) {
        resultLabel.textContent = 'Computer Won'
    } else {
        resultLabel.textContent = 'You won!'
    }
}

function computerChoice() {
    const choices = ["rock", "paper", "scissor"]
    return choices[Math.floor(Math.random()*choices.length)]
}
