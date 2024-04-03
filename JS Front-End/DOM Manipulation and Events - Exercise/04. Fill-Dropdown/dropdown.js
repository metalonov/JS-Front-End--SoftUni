function addItem() {
    const inputFieldTextElement = document.getElementById('newItemText');
    const inputFieldValueElement = document.getElementById('newItemValue');
    const menuDropdownElement = document.getElementById('menu');

    const optionElement = document.createElement('option');
    optionElement.textContent = inputFieldTextElement.value;
    optionElement.value = inputFieldValueElement.value;
    menuDropdownElement.appendChild(optionElement);

    inputFieldTextElement.value = '';
    inputFieldValueElement.value = '';
}