// 1. Sum First and Last Array Elements

// Write a function that receives an array of numbers and prints the sum of the first and last element in that array.

function solve(array){
    console.log(array[0] + array[array.length-1]);
}
solve([10, 17, 22, 33]);