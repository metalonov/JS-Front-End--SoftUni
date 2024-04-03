function solve() {
    const textBoxElement = document.getElementById('input').value;
    const outputTextElement = document.getElementById('output');

    const sentenceArr = textBoxElement
        .split('.')
        .filter(sentence => !!sentence);
    let formatedFraction = [];

    for (var i = 0; i < sentenceArr.length; i += 3) {
        formatedFraction
            .push(sentenceArr
            .slice(i, i + 3)
            .join('.') + '.');
    }

    formatedFraction.forEach(function(paragraph) {
        outputTextElement.innerHTML += '<p>' + paragraph + '</p>';
    });

}