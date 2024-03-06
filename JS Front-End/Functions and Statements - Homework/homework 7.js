// 7. NxN Matrix
// Write a function that receives a single integer number n and prints nxn matrix with that number.

function NxN(num){
    
    for (let i = 0; i < num; i++) {
        let arr = [];
        for (let j = 0; j < num; j++) {
            
            arr.push(num);
        }
        console.log(arr.join(' '));
    }
    
}
NxN(3);
NxN(7);
NxN(2);