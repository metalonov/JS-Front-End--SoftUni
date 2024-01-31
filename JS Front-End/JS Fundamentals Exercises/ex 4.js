function solve(start, stop) {

    let sum = 0;
    let collection = [];
    for (let index = start; index <= stop; index++) {

        sum += index;
        collection.push(index);
    }

    console.log(collection.join(" "));
    console.log(`Sum: ${sum}`);
}
solve(0, 26);