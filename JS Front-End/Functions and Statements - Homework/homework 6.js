function solve(password) {

    const lengthCheck = password.length < 6 || password.length > 10;
    const found = /[A-Za-z]{2,}\d{3,}/.test(password);
    const onlyLetters = /\W+/.test(password);
    const twoOrLessDigits = password => password
        .split('')
        .filter(character => Number.isInteger(Number(character)))
        .length >= 2;

    if (found) {
        return console.log(`Password is valid`);
    }

    if (lengthCheck) {
        console.log(`Password must be between 6 and 10 characters`);
    }
    
    if (onlyLetters) {
        console.log(`Password must consist only of letters and digits`);
    }
    if (twoOrLessDigits) {
        console.log(`Password must have at least 2 digits`);
    }

}

// solve('logIn');
// solve('MyPass123');
solve('Pa$s$s');