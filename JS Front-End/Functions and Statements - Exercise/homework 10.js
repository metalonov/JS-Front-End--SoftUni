function factorials(num1, num2){

    let result = factorial(num1) / factorial(num2);

    console.log(result.toFixed(2));

    function factorial(number){
        if (number <= 1){
            return 1;
        }
        return number * factorial(number - 1);
    }
}

// factorials(5, 2);
factorials(6, 2);