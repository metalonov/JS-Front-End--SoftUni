function attachEventsListeners() {
    const convertButtonElement = document.querySelectorAll('[id*=Btn]');

    const daysBoxElement = document.getElementById('days');
    const hoursBoxElement = document.getElementById('hours');
    const minutesBoxElement = document.getElementById('minutes');
    const secondsBoxElement = document.getElementById('seconds');

    for (const button of convertButtonElement) {
        button.addEventListener('click', () => {
            const found = button.previousElementSibling;
            switch (found.id) {
                case 'days':
                    hoursBoxElement.value = Number(found.value * 24);
                    minutesBoxElement.value = Number(found.value * 1440);
                    secondsBoxElement.value = Number(found.value * 86400);
                    break;
                case 'hours':
                    daysBoxElement.value = Number(found.value / 24);
                    minutesBoxElement.value = Number(found.value * 60);
                    secondsBoxElement.value = Number(found.value * 3600);
                    break;
                case 'minutes':
                    daysBoxElement.value = Number(found.value / 1440);
                    hoursBoxElement.value = Number(found.value / 60);
                    secondsBoxElement.value = Number(found.value * 60);
                    break;
                case 'seconds':
                    daysBoxElement.value = Number(found.value / 86400);
                    hoursBoxElement.value = Number(found.value / 3600);
                    minutesBoxElement.value = Number(found.value / 60);
                    break;
                default:
            }
        })
    }

}