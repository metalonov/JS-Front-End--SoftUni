function solve() {
  const firstTextAreaElement = document.querySelector('#exercise textarea:first-of-type');
  const secondTextAreaElement = document.querySelector('#exercise textarea:last-of-type');
  const generateButtonElement = document.querySelector('#exercise button:first-of-type');
  const buyButtonElement = document.querySelector('#exercise button:last-of-type');
  const furnitureTbodyElement = document.querySelector('.table tbody');

  
  generateButtonElement.addEventListener('click', () => {
    const furnitures = JSON.parse(firstTextAreaElement.value);
    
    for (const furniture of furnitures) {
      const imgElement = document.createElement('img');
      imgElement.src = furniture.img;

      const imageTdElement = document.createElement('td');
      imageTdElement.appendChild(imgElement);

      const pNameElement = document.createElement('p');
      pNameElement.textContent = furniture.name;
      const tdNameElement = document.createElement('td');
      tdNameElement.appendChild(pNameElement);

      const pricePElement = document.createElement('p');
      pricePElement.textContent = furniture.price;
      const priceTdElement = document.createElement('td');
      priceTdElement.appendChild(pricePElement);

      const decPElement = document.createElement('p');
      decPElement.textContent = furniture.decFactor;
      const decTdElement = document.createElement('td');
      decTdElement.appendChild(decPElement);

      const markElement = document.createElement('input');
      markElement.setAttribute('type', 'checkbox');
      const markTdElement = document.createElement('td');
      markTdElement.appendChild(markElement);

      const furnitureTrElement = document.createElement('tr');
      furnitureTrElement.appendChild(imageTdElement);
      furnitureTrElement.appendChild(tdNameElement);
      furnitureTrElement.appendChild(priceTdElement);
      furnitureTrElement.appendChild(decTdElement);
      furnitureTrElement.appendChild(markTdElement);
      
      furnitureTbodyElement.appendChild(furnitureTrElement);
    }
  })
    
  
  buyButtonElement.addEventListener('click', () => {
    let names = [];
    let totalPrice = 0;
    let avgDecFactor = [];

    Array.from(furnitureTbodyElement.children)
    .forEach(furnitureElement => {
      const markedForBuying = furnitureElement.querySelector('input[type=checkbox]');
      if (!markedForBuying.checked) {
        return;
      }
      const name = furnitureElement.children.item(1).textContent;
      const price = Number(furnitureElement.children.item(2).textContent);
      const decorationFactor = Number(furnitureElement.children.item(3).textContent);
      names.push(name);
      totalPrice += price;
      avgDecFactor.push(decorationFactor);
    });
    
    secondTextAreaElement.textContent += `Bought furniture: ${names.join(', ')}\n`;
    secondTextAreaElement.textContent += `Total price: ${totalPrice.toFixed(2)}\n`;
    secondTextAreaElement.textContent += `Average decoration factor: ${average(avgDecFactor)}`
  })


  function average(arr) {
    let sum = 0;
    for (const number of arr) {
      sum += number;
    }

    return sum / arr.length;
  }
}



// [{"name": "Sofa", "img": "https://res.cloudinary.com/maisonsdumonde/image/upload/q_auto,f_auto/w_200/img/grey-3-seater-sofa-bed-200-13-0-175521_9.jpg", "price": 150, "decFactor": 1.2}]
// [{"name": "Table", "img": "https://res.cloudinary.com/maisonsdumonde/image/upload/q_auto,f_auto/w_200/img/grey-3-seater-sofa-bed-200-13-0-175521_9.jpg", "price": 180, "decFactor": 0.2}]
// [{"name": "Desk", "img": "https://res.cloudinary.com/maisonsdumonde/image/upload/q_auto,f_auto/w_200/img/grey-3-seater-sofa-bed-200-13-0-175521_9.jpg", "price": 210, "decFactor": 0.7}]