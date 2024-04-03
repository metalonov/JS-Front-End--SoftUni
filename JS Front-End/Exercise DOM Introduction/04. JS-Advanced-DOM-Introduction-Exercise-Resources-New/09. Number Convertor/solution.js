function solve() {

    const inputNumberElement = document.getElementById('input');
    const selectMenuToElement = document.getElementById('selectMenuTo');
    const resultBoxElement = document.getElementById('result');
    const convertButtonElement = document.querySelector('button');

    const binaryOptionElement = selectMenuToElement.querySelector('option');
    binaryOptionElement.value = 'binary';
    binaryOptionElement.textContent = 'Binary';

    const hexadecimalOptionElement = document.createElement('option');
    hexadecimalOptionElement.value = 'hexadecimal';
    hexadecimalOptionElement.textContent = 'Hexadecimal';
    selectMenuToElement.appendChild(hexadecimalOptionElement);

    const numberValue = parseInt(inputNumberElement.value);

    convertButtonElement.addEventListener('click', () => {
        if (binaryOptionElement.value === 'hexadecimal') {
            resultBoxElement.value = numberValue.toString(2);
        } if (binaryOptionElement.value === 'binary') {
            resultBoxElement.value = numberValue.toString(16);
        }
    });

    
}