const boxes = document.querySelectorAll('.box')
const playerTurn = document.getElementById('playerTurn')
let placeHolder = ["","","","","","","","",""]
const resultDisplay = document.getElementById('result')
const resetBtn = document.querySelector('.reset-btn')
let player = "X"
let isRunning = true
gameInit()

function gameInit() {
    boxes.forEach(box=> {
        box.onclick=(e)=> {
            boxClicked(e.target.getAttribute("data-value"))
            displayChosenCell(e.target.getAttribute("data-value"))
        }
    })

    resetBtn.onclick = () => {
        console.log("reset clicked")
        reset()
    }
}

const boxClicked = (value) => {
    if(!isRunning || placeHolder[value] != '') {
        return 
    }
    placeHolder[value] = player
    changePlayer()
    checkWin()
}

const displayChosenCell = (cell) => {
    boxes[cell].textContent = placeHolder[cell]
}

function changePlayer() {
    playerTurn.textContent = `${player}'s turn`
    player=="X" ? player="O":player="X" 
}

function reset() {
    placeHolder = ["","","","","","","","",""]
    boxes.forEach(box=>{
        box.textContent=""
    })
    isRunning = true
    player = "X"
    resultDisplay.textContent = ""
    playerTurn.textContent = ""
}
 
const checkWin = () => {
    winnerConditions = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    for(let i=0; i < winnerConditions.length; i++) {
        const condition = winnerConditions[i]
        const box1 = placeHolder[condition[0]]
        const box2 = placeHolder[condition[1]]
        const box3 = placeHolder[condition[2]]

        if(box1=="X"&&box2=="X"&&box3=="X") {
            resultDisplay.textContent = "X win"
            isRunning = false
        } 

        if(box1=="O"&&box2=="O"&&box3=="O") {
            resultDisplay.textContent = "O win"
            isRunning = false
        }   
    }
}

