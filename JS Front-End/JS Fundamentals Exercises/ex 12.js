function solve(number, action1, action2, action3, action4, action5) {

    let intNumber = parseFloat(number);
    const actions = [];
    actions.push(action1, action2, action3, action4, action5)

    for (let i = 0; i < actions.length; i++){
        switch (actions[i]) {
            case ('chop'):
                intNumber /= 2;
                break;
            case ('dice'):
                intNumber = Math.sqrt(intNumber)
                break;
            case ('spice'):
                intNumber += 1;
                break;
            case ('bake'):
                intNumber *= 3;
                break;
            case ('fillet'):
                intNumber = intNumber - (intNumber * .20);
            break;
        }
        console.log(intNumber)
    }
}

solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');