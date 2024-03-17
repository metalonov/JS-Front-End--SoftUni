// 5. Palindrome Integers
// A palindrome is a number, which reads the same backward as forward, such as 323 or 1001. Write a function, which receives an array of positive integers and checks if each integer is a palindrome or not.
function solve(nums) {

    for (const element of nums) {

        let leftToRight = element.toString();
        let rightToLeft = element.toString()
            .split('')
            .reverse()
            .join('');

        //knowing that if the string is the same, it will be written in the
        //same place in memory so even loose comparason works
        let bool = leftToRight == rightToLeft;

        console.log(bool);
    }

}
//solve([123, 323, 421, 121]) //false, true, false, true
solve([32,2,232,1010]) //false, true, true, false