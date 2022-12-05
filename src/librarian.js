class Librarian {
  constructor(name, library) {
    this.name = name,
    this.library = library
  }

  greetPatron(name, dayTime){
    if(dayTime === true){
      return `Good morning, ${name}!`
    }
    return `Hello, ${name}!`
  }

  findbook(librarian, book){
    for(var i = 0; i < library['shelves'][shelfGenre].length; i++)
    if(librarian.library['shelves'][shelfgenre][i].title === book.title){
      console.log
      return `Yes, we have ${book.title}`
    }
    return `Sorry, we do not have ${book.title}`
}
} 

module.exports = Librarian;