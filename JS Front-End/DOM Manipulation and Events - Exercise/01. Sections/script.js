function create(strArr) {
    const contentElement = document.getElementById('content');

    const divElements = strArr.map(word => {
        const divElement = document.createElement('div');
        const pElement = document.createElement('p');
        pElement.style.display = 'none';

        divElement.addEventListener('click', () => {
            pElement.style.display = 'block';
        })

        pElement.textContent = word;

        divElement.appendChild(pElement);

        return divElement;
    });


    const divFragment = document.createDocumentFragment(); //not an html element
    divElements.forEach(divElement => contentElement.appendChild(divElement)); 
    contentElement.appendChild(divFragment);
    //the fragment created "disappears" as it is appended to the element

}