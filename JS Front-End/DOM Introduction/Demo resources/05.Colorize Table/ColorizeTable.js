function colorize() {
    const rowElements = document.querySelectorAll('table tr:nth-child(2n)');
    for (const element of rowElements) {
        element.style.backgroundColor = 'teal';
    }
}