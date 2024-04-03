function tofixed(text) {

    text.toLowerCase();
    let newSentence = text.split(' ');
    for (let i = 1; i < newSentence.length; i++){
      let temp = newSentence[i];
      temp = temp[0].toUpperCase() + temp.slice(1);
      newSentence[i] = temp;
    }
    result = newSentence.join('');

    console.log(result);
}

tofixed('this is an example')