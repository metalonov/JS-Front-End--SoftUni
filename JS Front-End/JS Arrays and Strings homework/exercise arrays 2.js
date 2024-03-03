function solve(array, stepping) {

    let arrayLength = array.length;
    let newArr = [];

    for (let index = 0; index < arrayLength; index += stepping) {

        let currentNumber = array[index];
        newArr.push(currentNumber)
    }
    
    return newArr;
    
}
// solve(['5', '20', '31', '4', '20'], 2);
// solve(['dsa', 'asd', 'test', 'tset'], 2);
solve(['1', '2', '3', '4', '5'], 6);