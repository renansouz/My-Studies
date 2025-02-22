const fruits = ["Apple", "Banana", "Orange"];
const [first, second, third] = fruits;
console.log(first); 


const numbers = [10, 20, 30, 40, 50];
const [, , thirdNumber] = numbers;
console.log(thirdNumber);

const colors = ["Red"];
const [primary, secondary = "Green"] = colors;
console.log(primary); 
console.log(secondary);

const person = {
  userName: "Renan",
  age: 25,
  country: "Brazil"
};
const { userName, age, country } = person;
console.log(userName); 
console.log(age);    
console.log(country);

const user = { username: "renan_dev", email: "renan@example.com" };
const { username: userlogin, email } = user;
console.log(userlogin); 
console.log(email);

const car = { brand: "Toyota" };
const { brand, model = "Unknown" } = car;
console.log(brand);
console.log(model);

function showUserInfo({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}
const userInfo = { name: "Nicole", age: 30 };
showUserInfo(userInfo);

function printCoordinates([x, y]) {
  console.log(`X: ${x}, Y: ${y}`);
}
const point = [10, 20];
printCoordinates(point);

function greet({ name = "Guest" } = {}) {
  console.log(`Hello, ${name}!`);
}
greet({ name: "Renan" });
greet();