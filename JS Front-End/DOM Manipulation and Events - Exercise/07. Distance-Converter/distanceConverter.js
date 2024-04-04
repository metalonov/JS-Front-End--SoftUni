function attachEventsListeners() {
    const fromUnitOptionElement = document.getElementById('inputUnits');
    const fromUnitOptionValueElement = document.getElementById('inputDistance');
    const convertButtonElement = document.getElementById('convert');

    const toUnitOptionElement = document.getElementById('outputUnits');
    const toDistanceOptionValueElement = document.getElementById('outputDistance');


    convertButtonElement.addEventListener('click', () => {
        const milimeters = convertToMilimeters(Number(fromUnitOptionValueElement.value), Number(fromUnitOptionElement.selectedIndex));
        console.log(milimeters);
        const resultingConvertedDistance = convertTo(milimeters, Number(toUnitOptionElement.selectedIndex));
        toDistanceOptionValueElement.value = resultingConvertedDistance.toFixed(4);
    })
    

    function convertTo(value, unit) {
        switch (unit) {
            case unit = 0:
                return value / 1000000;
            case unit = 1:
                return value / 1000;
            case unit = 2:
                return value / 10;
            case unit = 3:
                return value;
            case unit = 4:
                return value / 1609000;
            case unit = 5:
                return value / 914.4;
            case unit = 6:
                return value / 304.8;
            case unit = 7:
                return value / 25.4;
        }
    }

    function convertToMilimeters(value, unit) {

        switch (unit) {
            case unit = 0:
                return value * 1000000;
            case unit = 1:
                return value * 1000;
            case unit = 2:
                return value * 10;
            case unit = 3:
                return value;
            case unit = 4:
                return value * 1609000;
            case unit = 5:
                return value * 914.4;
            case unit = 6:
                return value * 304.8;
            case unit = 7:
                return value * 25.4;
        }
    }
}