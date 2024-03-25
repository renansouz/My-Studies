let number = prompt(`What number do you wanna know the multiplication table?`);
let numbers = "";

for (let i = 1; i <= 20; i++) {
  numbers += number + " x " + i + " = " + number * i + "\n";
}

alert(`The multiplication table of ${number} is:\n${numbers}`);
