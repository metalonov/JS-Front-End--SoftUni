// function func(text) {
//     let regex = /#[A-Za-z]+/gm;
//     let matches = text.match(regex);

//     for (let word of matches) {
//         word = word.replace('#', '');
//         console.log(word);
//     }
// }
// func('The symbol # is known #variously in English-speaking #regions as the #number sign');

function solve(text){

    let textArr = text.split(' ');

    for (const iterator of textArr) {
        if (iterator.startsWith('#') && iterator.length > 1){
            let trimmed = iterator.slice(1, iterator.length);
            console.log(trimmed);
            continue;
        }
    }
}
// solve('The symbol # is known #variously in English-speaking #regions as the #number sign');
solve('The symbol # is known #variously in English-speaking #regions as the #number sign');

solve('Nowadays everyone uses # to tag a #special word in #socialMedia');