
function createLibrary(name){
  return{
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    }
  }
}

function addBook(library, book){

  for(var i = 0; i < library.shelves.length; i++)

  if(book.genre === library[i].genre){
    library.shelves[i].push(book)
  }
}
// if genre matches shelf genre, .push



module.exports = {
  createLibrary,
  addBook,
  // checkoutBook
};