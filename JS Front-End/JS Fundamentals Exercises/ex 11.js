function solve(speed, location) {

    let speedLimit = 0;
    let status = 0;

    switch (location) {
        case ('motorway'):
            speedLimit = 130;
            break;
        case ('interstate'):
            speedLimit = 90;
            break;
        case ('city'):
            speedLimit = 50;
            break;
        case ('residential'):
            speedLimit = 20;
            break;
    }

    let difference = speed - speedLimit;

    if (difference <= 20){
        status = 'speeding';
    }
    else if (difference > 20, difference <= 40){
        status = 'excessive speeding';
    }
    else if (difference > 40){
        status = 'reckless driving';
    }

    if (difference > 0) {
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
    }
    else {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    }

}
solve(120, 'interstate');