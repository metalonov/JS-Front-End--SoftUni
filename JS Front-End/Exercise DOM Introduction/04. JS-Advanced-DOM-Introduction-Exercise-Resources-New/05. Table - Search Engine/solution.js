function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      //   TODO:
      const rowElements = document.querySelectorAll('table.container tbody tr');
      const searchSelectorCriteria = document.getElementById('searchField').value;


      for (const trElement of rowElements) {
        
         trElement.classList.remove('select')
         if (trElement.innerText.includes(searchSelectorCriteria)){
            trElement.classList.add('select');
         }
         
      }
   }
}