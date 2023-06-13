const questions = [
    {
        question: "How old is Bikram?" ,
        options: [10, 30,22, 40],
        answer: 3 
    },
    {
        question: "Which programming language is hard to learn?" ,
        options: ["Javascript", "Python", "Java", "C++"],
        answer: 4
    },
    {
        question: "Who is the prime minister of Nepal?" ,
        options: ["Prachanda", "KP Oli", "Ramchandra Paudel", "SherBahadur Deuba"],
        answer: 1
    },
    {
        question: "Who is the founder of microsoft?" ,
        options: [ "Narendra Modi", "Bill Gates", "Steve Jobs", "Tim Cook"],
        answer: 2
    },
    {
        question: "Who invented JS?" ,
        options: [ "James Gosling", "Guido Rossum", "Elon Musk","Brendan Eich"],
        answer: 4
    },
]

const container = document.querySelector('.container')
const question = document.getElementById('question')
const options = document.getElementsByTagName('label')
const radioChecked = document.getElementsByTagName('input')
let currentQuestion = 0
const nextBtn = document.getElementById('nextBtn')
const resultLabel = document.getElementById('resultLabel')
let correct = 0

init()
function init() {
    displayQuestion()
    nextBtn.onclick = nextQuestion
}

function displayQuestion() {
    if(currentQuestion<questions.length) {
        question.textContent = questions[currentQuestion].question
        for(let i=0; i<options.length; i++) {
            options[i].textContent = questions[currentQuestion].options[i]
            
        }
    }
}

function nextQuestion(e) {
    for(let i=0; i<radioChecked.length; i++) {
        if(radioChecked[i].checked) {
            const value = radioChecked[i].value
            checkAnswer(value)
            radioChecked[i].checked = false
        }
    }


    displayQuestion()
}

function checkAnswer(ans) {
    if(ans == questions[currentQuestion].answer) {
        correct += 1
    }
    currentQuestion+=1

    if(currentQuestion==questions.length) {
        resultLabel.textContent = `Correct ${correct}/${questions.length}`
        nextBtn.style.display = 'None'
    }
}

