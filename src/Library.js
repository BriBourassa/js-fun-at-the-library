
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
    library.shelves[book.genre].push(book)
}

function checkoutBook(library, book, shelfGenre){
  for(var i = 0; i < library['shelves'][shelfGenre].length; i++) {
    if(library['shelves'][shelfGenre][i].title === book){
      library['shelves'][shelfGenre].splice(i,1)
      return `You have now checked out ${book} from the ${library.name}`
    } 
  }  
  return `Sorry, there are currently no copies of ${book} available at the ${library.name}`
}




module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};