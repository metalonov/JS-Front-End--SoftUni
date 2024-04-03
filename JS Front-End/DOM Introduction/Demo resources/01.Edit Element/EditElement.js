function editElement(referenceElement, stringMatch, replacer) {
    while (referenceElement.textContent.includes(stringMatch)) {
        referenceElement.textContent = referenceElement.textContent.replace(stringMatch, replacer);
    }
}