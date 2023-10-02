function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  //make a request to an API
  //APIs allow us to add data and functionalityto the applications we build
  
  fetch('https://anapioficeandfire.com/api/books')//fetch data
  .then((resp)=>resp.json())//render the APIs response in plain js
  .then((books)=>renderBooks(book))//print out the data retrieved
}
function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
//JSON a technique for formationg data