function solve(number) {

    let strNumber = number.toString();
    let currentDigit = strNumber[0];
    let sum = Number(currentDigit);
    let areEqual = true;

    for (let i = 1; i < strNumber.length; i++){
        if (currentDigit !== strNumber[i]){
            areEqual = false;
        }
        currentDigit = strNumber[i]
        sum += Number(currentDigit);
    }
    console.log(areEqual);
    console.log(sum);
}
solve(2222);