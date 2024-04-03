function sumTable() {
    const valueElements = document.querySelectorAll('table tr > td:nth-child(2n):not(#sum)');
    let sum = 0;

    for (const element of valueElements) {
        sum += Number(element.textContent);
    }

    document.getElementById('sum').textContent = sum;
}