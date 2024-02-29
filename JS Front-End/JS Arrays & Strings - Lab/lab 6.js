// 6. Count String Occurrences

// Write a function that receives a text and a single word that you need to search. Print the number of all occurrences of this word in the text.
function solve(text, word){
    let sentence = text.split(' ')
    let count = 0;

    for (let item of sentence){
        if (item == word){
            count++;
        }
    }
    
    console.log(count);
}
// solve('This is a word and it also is a sentence', 'is'); //2
solve('softuni is great place for learning new programming languages', 'softuni'); //1