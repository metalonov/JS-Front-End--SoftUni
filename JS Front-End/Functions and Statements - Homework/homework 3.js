// 3. Characters in Range
// Write a function that receives two characters and prints on a single line all the characters in between them according to the ASCII code. Keep in mind that the second character code might be before the first one inside the ASCII table.
function solve(char1, char2) {
    let startCode = char1.charCodeAt();
    let endCode = char2.charCodeAt();
    let arr = [];

    if (startCode > endCode){
        for (let i = endCode + 1; i < startCode; i++) {
            arr.push(String.fromCharCode(i));
        }
    }
    else {
        for (let i = startCode + 1; i < endCode; i++) {
            arr.push(String.fromCharCode(i));
        }
    }
    
    console.log(arr.join(' '));

}
// solve('a', 'd');
// solve('#', ':');
solve('C', '#');