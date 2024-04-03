function extract(content) {

    let text = document.getElementById(content).textContent;
    
    const matches = text.matchAll(/\(([A-Za-z ]+)\)/g);

    return Array
    .from(matches)
    .map(match => match[1])
    .join('; ');
}