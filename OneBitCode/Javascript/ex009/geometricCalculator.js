function calculateTriangle() {
  const base = prompt("Enter the base of the triangle");
  const height = prompt("Enter the height of the triangle");
  return  base * height / 2;
}

function calculateRectangle() {
  const base = prompt("Enter the base of the rectangle");
  const height = prompt("Enter the height of the rectangle");
  return base * height;
}

function calculateSquare() {
  const side = prompt("Enter the side of the square");
  return side * side;
}

function calculateTrapezoid() {
  const biggerBase = parseFloat(prompt("Enter the larger base of the trapezoid"));
  const smallerBase = parseFloat(prompt("Enter the smaller base of the trapezoid"));
  const height = parseFloat(prompt("Enter the height of the trapezoid"));
  return ((biggerBase + smallerBase) * height) / 2;
}

function CalculateCircle() {
  let radious = parseFloat(prompt("Enter the radious of the circle"));
  return 3.14 * radious * radious;
}

function showMenu(){
  return prompt(
    `choose a geometric shape to find the area:
  1 - Calculate the area of a Triangle.
  2 - Calculate the area of a Rectangle.
  3 - Calculate the area of a Square.
  4 - Calculate the area of a Trapezoid.
  5 - Calculate the area of a Circle.
  6 - Close menu.
  `
  )
}

function execute(){
  let option = ""
  do {
  option = showMenu();
  let result;

  switch (option) {
    case "1":
      result = calculateTriangle()
      break;
    case "2":
      result = calculateRectangle()
      break;
    case "3":
      result = calculateSquare()
      break;
    case "4":
      result = calculateTrapezoid()
      break;
    case "5":
      result = CalculateCircle()
      break;
    case "6":
      alert("closing");
      break;
    default:
      alert(`This option is not avaible`);
  }

  if (result) {
    alert("Result: " + result)
  }

} while (option != "6");
}

execute()
