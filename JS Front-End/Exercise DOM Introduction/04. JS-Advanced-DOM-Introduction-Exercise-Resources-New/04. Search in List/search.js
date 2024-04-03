function search() {
   const townListElement = document.getElementById('towns').childNodes;
   const searchTextElement = document.getElementById('searchText').value;
   const resultTextElement = document.getElementById('result');

   let matches = 0;

   // for (const unsetTown of townListElement) {
   //    unsetTown.style.textDecoration = 'unset';
   //    unsetTown.style.fontWeight = 'normal';
   // }

   for (const town of townListElement) {
      if (town.textContent.toLowerCase().includes(searchTextElement.toLowerCase())) {
         town.style.textDecoration = 'underline';
         town.style.fontWeight = 'bold';
         matches++;
      }
   }

   resultTextElement.textContent = `${matches} matches found`;
}
