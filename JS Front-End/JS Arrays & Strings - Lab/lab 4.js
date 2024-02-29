// 4. Substring

// Write a function that receives a string and two numbers. The numbers will be a starting index and count of elements to substring. Print the result. 
function solve(arr, startIndex, endIndex){
    console.log(arr.slice(startIndex, endIndex + 1));
}
solve('ASentence', 1, 8);
solve('SkipWord', 4, 7);