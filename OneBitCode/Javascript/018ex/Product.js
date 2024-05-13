class Product {
  constructor(name, description, price){
    this.name = name
    this.description = description
    this.price = price
    this.inStock = 0
  }

  addToStock(qtt){
    this.inStock += qtt 
  }

  calculateDiscount(descount){
    const d = this.price * descount/ 100
    return this.price -= d
  }
}

const fastAndSlow = new Product("Fast and Slow", "big product", 100)

console.log(fastAndSlow);

fastAndSlow.calculateDiscount(30)
fastAndSlow.addToStock(2)

console.log(fastAndSlow);