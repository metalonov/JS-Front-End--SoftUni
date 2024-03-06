function solve(password) {

    const found = password.match(/[A-Za-z]{2,}\d{3,}/g);
    const onlyLetters = password.match(/\W+/g);
    const twoOrLessDigits = password.match(/\D{0,2}/g);

    if (password.length < 6 || password.length > 10) {
        console.log(`Password must be between 6 and 10 characters`);
    }
    if (found) {
        return console.log(`Password is valid`);
    }
    if (onlyLetters) {
        console.log(`Password must consist only of letters and digits`);
    }
    if (twoOrLessDigits) {
        console.log(`Password must have at least 2 digits`);
    }

}
solve('logIn');
// solve('MyPass123');
// solve('Pa$s$s');