// 3. Even and Odd Subtraction

// Write a program that calculates the difference between the sum of the even and the sum of the odd numbers in an array.

function solve(arr){
    let evenSum = 0;
    let oddSum = 0;
    arr.forEach(element => {

        if (element % 2 == 0){
            evenSum += element;
        }
        else {
            oddSum += element;
        }
    });
    
    let diff = evenSum - oddSum;
    console.log(diff);
}
// solve([1,2,3,4,5,6]);
// solve([3,5,7,9]);
solve([2,4,6,8,10]);