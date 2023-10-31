class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }


    addClock(time, callback) {
        if (!time || !callback) {
            throw new Error('Отсутствуют обязательные аргументы');
        } else if (this.alarmCollection.time === time) {
            console.warn('Уже присутствует звонок на это же время')
        } else {
            this.alarmCollection.push({
                time: time,
                callback: callback,
                canCall: true,
            })
        }
    }

    removeClock(time) {
        let filtered = this.alarmCollection.filter(alarm => alarm.time !== time);
        this.alarmCollection = filtered;
    }

    getCurrentFormattedTime() {
        const date = new Date();
        let currentHour = date.getHours();
        currentHour = ("0" + currentHour).slice(-2);
        let currentMinutes = date.getMinutes();
        currentMinutes = ("0" + currentMinutes).slice(-2);

        return String(currentHour + ":" + currentMinutes);
    }

    start() {
        if (this.intervalId) {
            return;
        }

        const interval = setInterval(() => {
            this.alarmCollection.forEach(alarm => {
                if (alarm.time === this.getCurrentFormattedTime() && alarm.canCall === true) {
                    alarm.canCall = false;
                    alarm.callback();
                }
            })

        }, 1000)
        this.intervalId = interval;
    }



    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach(alarm => alarm.canCall = true);
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}


