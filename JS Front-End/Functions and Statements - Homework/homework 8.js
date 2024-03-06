function perfect(num) {

    let sum = 0;

    for (let index = 1; index < num / 2; index++) {
        if (num % index === 0) {
            sum += index;
        }
    }

    if (sum == num / 2) {
        console.log(`We have a perfect number!`);
    }
    else {
        console.log(`It's not so perfect.`);
    }
}
// perfect(6);
perfect(28);
// perfect(1236498);