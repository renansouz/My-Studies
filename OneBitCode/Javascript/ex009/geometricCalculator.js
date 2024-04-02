function calculateTriangle(b, h) {
  let result = (b * h) / 2;
  return result;
}

function calculateRectangle(b, h) {
  let result = b * h;
  return result;
}

function calculateSquare(l) {
  let result = l * l;
  return result;
}

function calculateTrapezoid(bma, bme, height) {
  let result = ((bma + bme) * height) / 2;
  return result;
}

function CalculateCircle(r) {
  let result = 3.14 * r;
  return result;
}

let menu;

do {
  menu = parseFloat(
    prompt(
      `choose a geometric shape to find the area:
    1 - Calculate the area of a Triangle.
    2 - Calculate the area of a Rectangle.
    3 - Calculate the area of a Square.
    4 - Calculate the area of a Trapezoid.
    5 - Calculate the area of a Circle.
    6 - Close menu.
    `
    )
  );

  switch (menu) {
    case 1:
      let Tbase = parseFloat(prompt("Enter the base of the triangle"));
      let Theight = parseFloat(prompt("Enter the height of the triangle"));
      alert(`The area of the triangle is ${calculateTriangle(Tbase, Theight)}`);
      break;
    case 2:
      let Rbase = parseFloat(prompt("Enter the base of the rectangle"));
      let Rheight = parseFloat(prompt("Enter the height of the rectangle"));
      alert(
        `The area of the rectangle is ${calculateRectangle(Rbase, Rheight)}`
      );
      break;
    case 3:
      let Sside = parseFloat(prompt("Enter the side of the square"));
      alert(`The area of the square is ${calculateSquare(Sside)}`);
      break;
    case 4:
      let Tbma = parseFloat(prompt("Enter the larger base of the trapezoid"));
      let Tbme = parseFloat(prompt("Enter the smaller base of the trapezoid"));
      let Th = parseFloat(prompt("Enter the height of the trapezoid"));

      alert(
        `The area of the trapezoid is ${calculateTrapezoid(Tbma, Tbme, Th)}`
      );
      break;
    case 5:
      let radious = parseFloat(prompt("Enter the radious of the circle"));
      alert(`The area of the circle is ${CalculateCircle(radious)}`);
      break;
    case 6:
      alert("closing");
      break;
    default:
      alert(`This option is not avaible`);
  }
} while (menu != 6);
