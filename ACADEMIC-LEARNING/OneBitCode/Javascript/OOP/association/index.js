// const Address = require("./Address")
const Person = require("./Person")

// const addr = new Address("25 de março", 40, "centro", "SP", "SP")
const renan = new Person("Renan", "25 de março", 40, "centro", "SP", "SP")

console.log(renan);
console.log(renan.address.fullAddress());