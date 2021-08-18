let clickSecurity = false
function getStart(duration) {
    if (!clickSecurity) {
        const start = document.querySelector('#minutes')
        clickSecurity = true
        var helo = start.onclick = setInterval(function () {
            if (duration >= 0) {
                let minutes = parseInt(duration / 60)
                let seconds = parseInt(duration % 60)
                minutes = minutes < 10 ? '0' + minutes : minutes
                seconds = seconds < 10 ? '0' + seconds : seconds
                start.innerHTML = `${minutes}:${seconds}`
                console.log(duration)
                if (duration <= 0) {
                    start.innerHTML = 'ShortBreak'
                }
                --duration
            }
        }, 1000)
    }
}
