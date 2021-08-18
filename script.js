let clickSecurity = false

function getStart(duration) {
    if (!clickSecurity) {
        const start = document.querySelector('#minutes')
        const pause = document.querySelector('#pause')
        clickSecurity = true
        const startPomodoro = setInterval(function () {
            if (duration >= 0) {
                let minutes = parseInt(duration / 60)
                let seconds = parseInt(duration % 60)
                minutes = minutes < 10 ? '0' + minutes : minutes
                seconds = seconds < 10 ? '0' + seconds : seconds
                start.innerHTML = `${minutes}:${seconds}`
                if (duration <= 0) {
                    start.innerHTML = 'ShortBreak'
                }
                --duration
            }
        }, 1000)
        pause.addEventListener ('click', function () {
            clearInterval(startPomodoro)
        })
    }
}
 