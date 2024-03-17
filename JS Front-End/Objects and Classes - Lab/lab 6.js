function solve(schedule){

    let days = {};

    for (const item of schedule) {
        let [day, person] = item.split(' ');
        if (days[day]) {
            console.log(`Conflict on ${day}!`);
        } else {
            days[day] = person;
            console.log(`Scheduled for ${day}`);
        }

    }

    for (const [key, value] of Object.entries(days)) {
        console.log(`${key} -> ${value}`);
    }

}

// solve(['Monday Peter',
// 'Wednesday Bill',
// 'Monday Tim',
// 'Friday Tim']);
solve(['Friday Bob',
'Saturday Ted',
'Monday Bill',
'Monday John',
'Wednesday George']);