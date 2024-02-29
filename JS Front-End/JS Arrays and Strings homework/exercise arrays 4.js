function func(array) {

    let resultedArray = [];
    let sortedArray = array.sort((a, b) => a - b);
    let arrayLength = array.length;

    for (let index = 0; index < arrayLength; index++) {

        if (index % 2 === 0) {
            resultedArray.push(sortedArray.shift());
        }
        else {
            resultedArray.push(sortedArray.pop());
        }
    }
    return resultedArray;
}
func([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);