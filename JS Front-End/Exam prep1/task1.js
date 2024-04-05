function solve(input) {
    let team = [];
    let member = {};

    const teamSize = input[0];
    const members = input.slice(1, Number(teamSize) + 1);
    const commands = input.slice(Number(teamSize) + 1);

    for (let person of members) {
        person = person.split(' ');
        member = {
            pName: person[0],
            shift: person[1],
            drinks: person[2].split(','),
        }
        team.push(member);
    }

    

    for (let arguments of commands) {
        arguments = arguments.split(' / ')
        const person = team.find(n => n.pName === arguments[1]);

        switch (arguments[0]) {
            case "Prepare":
                if (person != undefined && person.shift === arguments[2] && person.drinks.includes(arguments[3])) {
                    console.log(`${person.pName} has prepared a ${arguments[3]} for you!`);
                } else {
                    console.log(`${person.pName} is not available to prepare a ${arguments[3]}.`);
                }
                break;
            case "Change Shift":
                if (person != undefined) {
                    person['shift'] = arguments[2];
                    console.log(`${person.pName} has updated his shift to: ${arguments[2]}`);
                } else {
                    console.log(`no such barista`);
                }
                break;
            case "Learn":
                let drinkFind = person.drinks.find(d => d === arguments[2])
                const drinkName = arguments[2];
                if (drinkFind === undefined) {
                    person.drinks.push(drinkName);
                    console.log(`${person.pName} has learned a new coffee type: ${drinkName}.`);
                } else {
                    console.log(`${person.pName} knows how to make ${arguments[2]}.`);
                }
                break;
            case "Closed":
                break;
        }

    }

    for (const member of team) {
        console.log(`Barista: ${member.pName}, Shift: ${member.shift}, Drinks: ${member.drinks.join(', ')}`);
    }
    
}

// solve([
//     '3',
//     'Alice day Espresso,Cappuccino',
//     'Bob night Latte,Mocha',
//     'Carol day Americano,Mocha',
//     'Prepare / Alice / day / Espresso',
//     'Change Shift / Bob / night',
//     'Learn / Carol / Latte',
//     'Learn / Bob / Latte',
//     'Prepare / Bob / night / Latte',
//     'Closed']);

solve(['4',
'Alice day Espresso,Cappuccino',
'Bob night Latte,Mocha',
'Carol day Americano,Mocha',
'David night Espresso',
'Prepare / Alice / day / Espresso',
'Change Shift / Bob / day',
'Learn / Carol / Latte',
'Prepare / Bob / night / Latte',
'Learn / David / Cappuccino',
'Prepare / Carol / day / Cappuccino',
'Change Shift / Alice / night',
 'Learn / Bob / Mocha',
'Prepare / David / night / Espresso',
'Closed']);