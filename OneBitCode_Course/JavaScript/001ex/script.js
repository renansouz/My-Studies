//Recruit Registration

let firstName = prompt("What's your first name?")
let lastname = prompt("What's your last name?")
let education = prompt("What's your academic field?")
let born = prompt("In what year were you born?")
born = parseFloat(born)
let curentlyYear = 2024

let yearsOld = curentlyYear - born

alert(`Hey! ${firstName} ${lastname}, your academic fiel is: ${education} and you are ${yearsOld} years old`)


//Four Operation Calculator
let a = prompt("Enter a number:");
let b = prompt("Enter another number:");

a = parseFloat(a)
b = parseFloat(b)

let addition = a + b;
let subtraction = a - b;
let multiplication = a * b;
let division = a / b
  alert(` addition: ${a} + ${b} = ${addition} \n subtracion: ${a} - ${b} = ${subtraction}\n multiplication: ${a} x ${b} = ${multiplication} \n division: ${a} / ${b} = ${division}`);
