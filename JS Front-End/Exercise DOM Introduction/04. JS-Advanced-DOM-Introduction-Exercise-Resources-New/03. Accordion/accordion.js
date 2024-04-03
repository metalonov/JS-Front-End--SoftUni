function toggle() {
    const informationElement = document.getElementById('extra');
    const toggleElement = document.querySelector('.head span.button');

    const currentButton = toggleElement.textContent;
    if (currentButton === 'More') {
        informationElement.style.display = 'block';
        toggleElement.textContent = 'Less'
    } else {
        informationElement.style.display = 'none';
        toggleElement.textContent = 'More'
    }
}