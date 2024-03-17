function solve(input) {

    const dict = {};
    
    const searchWords = input
    .shift()
    .split(' ');

    for (const word of searchWords) {
        dict[word] = 0;
    }

    for (const word of input) {
        if (dict.hasOwnProperty(word)) {
            dict[word] += 1;
        }
        
    }
    
    Object.entries(dict)
        .sort((a, b) => b[1] - a[1])
        .forEach(([word, occurrences]) => console.log(`${word} - ${occurrences}`));
}

// solve([
//     'this sentence', 
//     'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
//     ]);

solve([
    'is the', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence'])