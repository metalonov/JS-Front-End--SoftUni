
const movieListElement = document.getElementById('movies');
const firstMovieElement = document.getElementById('li1');

const secondMovieElement = document.createElement('li');
secondMovieElement.textContent = 'Batman 2';

firstMovieElement.appendChild(secondMovieElement);

const clonedFirstMovieElement = firstMovieElement.cloneNode();

movieListElement.style.fontWeight = 'bold';