function deleteByEmail() {
    const inputEmailElement = document.querySelector('input[name=email]');
    const resultElement = document.getElementById('result');
    const tableNodeElements = document.querySelectorAll('table#customers tbody tr');

    const foundItem = Array
        .from(tableNodeElements)
        .find(trElement => trElement.children[1].textContent.includes(inputEmailElement.value));

    if (foundItem) {
        foundItem.remove();

        resultElement.textContent = `Deleted.`
    } else {
        resultElement.textContent = `Not found.`
    }

    inputEmailElement.value = '';
}