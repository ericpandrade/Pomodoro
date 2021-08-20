let duration = 1500
let isStart = false

const startPomodoro = () => {
    const time = document.querySelector('#minutes')
    const button = document.getElementById('buttonPlay')
    isStart = true
    const container = document.getElementById('container')

    if (duration >= 0 && isStart) {
        setTimeout(function () {
            container.style.width = '500px'
            let minutes = parseInt(duration / 60)
            let seconds = parseInt(duration % 60)
            minutes = minutes < 10 ? '0' + minutes : minutes
            seconds = seconds < 10 ? '0' + seconds : seconds
            time.innerHTML = `${minutes}:${seconds}`
            duration--
            isStart ? button.disabled = true : button.disabled = false
            isStart && startPomodoro()
        }, 1000)
    }

    if (duration < 0){
        minutes.innerHTML = 'ShortBreak'
        isStart = false
        button.disabled = false
    }

}

const stopPomodoro = () => {
    isStart = false
}

const resetPomodoro = () => {
    duration = 1500
    isStart = false
    minutes.innerHTML = 'Reset'
}

