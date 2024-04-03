function addItem() {
    const listElementChild = document.getElementById('items');
    const newItemText = document.getElementById('newItemText')

    //create new item
    const newItemElement = document.createElement('li')

    //add text contnt
    newItemElement.textContent = newItemText.value;

    //append to dom
    listElementChild.appendChild(newItemElement);

    newItemText.value = '';
}