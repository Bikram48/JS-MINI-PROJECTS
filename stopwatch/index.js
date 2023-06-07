let hourLabel = document.getElementById('hourLabel')
let minuteLabel = document.getElementById('minuteLabel')
let secondLabel = document.getElementById('secondLabel')
let startBtn = document.getElementById('startBtn')
let pauseBtn = document.getElementById('pauseBtn')
let resetBtn = document.getElementById('resetBtn')

let hr=min=sec=0
let isPaused
timerId = null
startBtn.onclick = () => {
    isPaused = false

    timerId = setInterval(()=>{
        if(!isPaused) {
            sec += 1
            secString = sec

            if(sec < 10) {
                secString = "0" + secString
            }

            secondLabel.innerHTML = secString

            if (sec==60) { 
                sec = 0
                min += 1
                minString = min
                if(min < 10) {
                    minString = "0" + minString
                }
                minuteLabel.textContent = minString + " : "
            }

            if(min==60) {
                hour += 1
                min = 0
                sec = 0
                hourString = hour
                if(hour < 10) {
                    hourString = "0" + hourString
                }
                hourLabel.textContent = hourString + " : "
            }
        }
        
    }, 1000)
}

pauseBtn.onclick = () => {
    isPaused = true
    clearInterval(timerId)
}

resetBtn.onclick = () => {
    sec = 0
    min = 0
    hour =0 
    isPaused = true
    secondLabel.textContent = "00"
    minuteLabel.textContent = "00 : "
    hourLabel.textContent = "00 : "
    clearInterval(timerId)
}