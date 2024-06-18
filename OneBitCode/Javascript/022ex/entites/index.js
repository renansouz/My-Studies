const App = require("./App")

App.createUser("renan@gmail.com", "renan souza")
App.createUser("nicole@gmail.com", "nicole pava")
App.createUser("amora@gmail.com", "amora izafa")

App.deposit("renan@gmail.com", 100)

App.tranfer("renan@gmail.com", "amora@gmail.com", 20)

App.changeLoanFee(10)
App.takeLoan("nicole@gmail.com", 2000, 24)

console.log(App.findUser("renan@gmail.com"));
console.log(App.findUser("renan@gmail.com").account);
console.log(App.findUser("nicole@gmail.com"));
console.log(App.findUser("nicole@gmail.com").account);
console.log(App.findUser("amora@gmail.com"));
console.log(App.findUser("amora@gmail.com").account);
console.log(App.findUser("amora@gmail.com").account);