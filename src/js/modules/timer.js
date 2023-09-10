
const timer = () => {
    const deadLine = new Date('2023-08-25');
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    
    setInterval(setTime, 1000)
    
    function setTime() {
        const timeRemaining = deadLine - new Date();
        if (timeRemaining <= 0) {
            daysEl.innerHTML = getZero(0);
            hoursEl.innerHTML = getZero(0);
            minutesEl.innerHTML = getZero(0);
            secondsEl.innerHTML = getZero(0);
            return
        }
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24))
        const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
        const seconds = Math.floor((timeRemaining / 1000) % 60);

        daysEl.innerHTML = getZero(days);
        hoursEl.innerHTML = getZero(hours);
        minutesEl.innerHTML = getZero(minutes);
        secondsEl.innerHTML = getZero(seconds);
        

        
    }

    function getZero(number) {
        if (number < 10) {
            number = `0${number}`
        }
        return number
    }
}

export default timer