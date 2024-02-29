// 1. Smallest of Three Numbers
// Write a function that receives three integers and prints the smallest number. Use an appropriate name for the function.
function solve(num1, num2, num3){
    let arr = [];
    arr.push(num1, num2, num3);
    let found = Math.min(...arr);
    console.log(found);
}
solve(1, 2, 6);