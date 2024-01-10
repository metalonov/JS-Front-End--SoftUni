function solve(argument) {

    let typeOfVar = typeof (argument);
    if (typeOfVar === "number") {
        let result = (Math.PI * argument**2).toFixed(2);
        console.log(result)
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeOfVar}.`);
    }
}
//solve(5);
//solve('name')