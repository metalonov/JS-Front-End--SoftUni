function arrayStringDemo(array, stepping) {

    let arrayLength = array.length;
    let newArr = [];

    for (let index = 0; index < arrayLength; index += stepping) {

        let currentNumber = array[index];
        newArr.push(currentNumber)
    }
    
       return newArr;
    
}
arrayStringDemo(['5', '20', '31', '4', '20'], 2);