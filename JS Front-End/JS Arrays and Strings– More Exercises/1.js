// 1. *Login
// You will be given a string representing a username. The correct password will be that username reversed. Until you receive the correct password print on the console: "Incorrect password. Try again.". When you receive the correct password print: "User {username} logged in."
// However, on the fourth try if the password is still not correct print: "User {username} blocked!" and end the program.
// The input comes as an array of strings - the first string represents username and each subsequent string is a password
function solve(arr) {

    let password = arr[0]
        .split('')
        .reverse()
        .join('');
    let retries = 4;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === password) {
            console.log(`User ${arr[0]} logged in.`);
            break;
        }
        retries--;
        if (retries === 0) {
            console.log(`User ${arr[0]} blocked!`);
            break;
        }
        else {
            console.log(`Incorrect password. Try again.`);
        }
    }
}
solve(['Acer','login','go','let me in','recA']);
// solve(['momo','omom']);
// solve(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);