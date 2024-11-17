class Book {
  constructor(title) {
    this.title = title
    this.published = false
  }
  
  published(){
    this.published = true
  }
}

const eragon = new Book("eragon")
const eldest = new Book("eldest")

eragon.published()

console.log(eragon);
console.log(eldest);

console.log(eragon instanceof Book);