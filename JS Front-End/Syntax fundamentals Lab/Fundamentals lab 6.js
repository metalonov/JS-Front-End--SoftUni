function solve(int1, int2, operator){

    let result;
    switch (operator) {
            case '+': result = int1 + int2;
            break;
            case '-': result = int1 - int2;
            break;
            case '/': result = int1 / int2;
            break;
            case '*': result = int1 * int2;
            break;
            case '%': result = int1 % int2;
            break;
            case '**': result = int1 ** int2;
            break;
    }
    console.log(result)

}
//solve(43842387238, 12381263718, '+');