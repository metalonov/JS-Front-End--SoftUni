function solve() {
   const productAddButtonElements = document.querySelectorAll('button.add-product');
   const textAreaElement = document.querySelector('textarea');
   const checkoutButtonElement = document.querySelector('.checkout');
   let productBasket = {};
   let totalPrice = 0;


   for (const buttonElement of productAddButtonElements) {
      const productElement = buttonElement.parentElement.parentElement;

      buttonElement.addEventListener('click', () => {
         const title = productElement.querySelector('.product-title').textContent;
         const price = Number(productElement.querySelector('.product-line-price').textContent);

         productBasket[title] = true;
         totalPrice += price;

         textAreaElement.textContent += `Added ${title} for ${price.toFixed(2)} to the cart.\n`;
      });
   }

   checkoutButtonElement.addEventListener('click', () => {
      Array
         .from(productAddButtonElements)
         .forEach(buttonElement => buttonElement.setAttribute('disabled', 'disabled'));

      checkoutButtonElement.setAttribute('disabled', 'disabled');
      const list = Object.keys(productBasket)

      textAreaElement.textContent += `You bought ${list.join(', ')} for ${totalPrice.toFixed(2)}.`
   });

}