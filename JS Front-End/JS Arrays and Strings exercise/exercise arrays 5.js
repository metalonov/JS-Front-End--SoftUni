function func(words, array) {

    let wordsArr = words.split(', ');
    let textArr = array.split(' ');

    let wordsArrLength = wordsArr.length;
    let textArrLength = textArr.length;

    for (let i = 0; i < wordsArrLength; i++) {
        for (let j = 0; j < textArrLength; j++) {

            if (wordsArr[i].length === textArr[j].length && textArr[j].includes('*')) {
                textArr[j] = wordsArr[i];
            }
        }
    }


     console.log(textArr.join(' '));
}
func('great, learning', 'softuni is ***** place for ******** new programming languages');