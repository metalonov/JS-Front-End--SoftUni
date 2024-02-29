function solve(age) {

    let result;

    if (0 <= age && age <= 2) {
        result = 'baby';
        console.log(result)
    } if (3 <= age && age <= 13) {
        result = 'child';
        console.log(result)
    } if (14 <= age && age <= 19) {
        result = 'teenager';
        console.log(result)
    } if (20 <= age && age <= 65) {
        result = 'adult';
        console.log(result)
    } if (age >= 66) {
        result = 'elder';
        console.log(result)
    } if (age < 0) {
        result = 'out of bounds';
        console.log(result)
    }

}