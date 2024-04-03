function solve() {

  let text = document.getElementById('text').value.toLowerCase();
  let conversion = document.getElementById('naming-convention').value;
  let result;
  let sentenceArray = text.split(' ');

  if (conversion === 'Camel Case') {

    for (let i = 1; i < sentenceArray.length; i++) {
      let temp = sentenceArray[i];
      temp = temp[0].toUpperCase() + temp.slice(1);
      sentenceArray[i] = temp;
    }

  } else if (conversion === 'Pascal Case') {

    for (let i = 0; i < sentenceArray.length; i++) {
      let temp = sentenceArray[i];
      temp = temp[0].toUpperCase() + temp.slice(1);
      sentenceArray[i] = temp;
    }
    
  } else {
    result = 'Error!'
  }
  result = sentenceArray.join('');
  document.getElementById('result').textContent = result;
}
// solve("this is an example", "Camel Case")