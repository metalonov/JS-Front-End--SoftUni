function addItem() {
    const inputItemElement = document.getElementById('newItemText');
    const itemsListElement = document.getElementById('items');

    const buttonDeleteOption = document.createElement('a');
    buttonDeleteOption.textContent = '[Delete]';
    buttonDeleteOption.href = '#'
    buttonDeleteOption.addEventListener('click', () => {
        newInputItemElement.remove();
    });
    
    const newInputItemElement = document.createElement('li')
    newInputItemElement.textContent = inputItemElement.value;
    
    
    itemsListElement.appendChild(newInputItemElement);
    newInputItemElement.appendChild(buttonDeleteOption);

    inputItemElement.value = '';
}