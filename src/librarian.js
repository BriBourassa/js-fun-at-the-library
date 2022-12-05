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

  findBook(book){
    var message = `Sorry, we do not have ${book}`
    for(var i = 0; i < this.library.shelves.fantasy.length; i++){
    if(this.library.shelves.fantasy[i].title === book){
      message = `Yes, we have ${book}`
      this.library.shelves.fantasy.splice(book)
    }
  }
  for(var i = 0; i < this.library.shelves.fiction.length; i++){
    if(this.library.shelves.fiction[i].title === book){
      message = `Yes, we have ${book}`
      this.library.shelves.fiction.splice(book)
    }
  }
  for(var i = 0; i < this.library.shelves.nonFiction.length; i++){
    if(this.library.shelves.nonFiction[i].title === book){
      message = `Yes, we have ${book}`
      this.library.shelves.nonFiction.splice(book)
    }
  }
    return message
} 
calculateLateFee(days){
  return Math.ceil(days *.25)
}
}



module.exports = Librarian;

