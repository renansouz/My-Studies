// (mm) - millimeter (mm)
// (cm) - centimeter (cm)
// (dm) - decimeter (dm)
// (dam) - decameter (dam)
// (hm) - hectometer (hm)
// (km) - kilometer (km)

let value = parseFloat(prompt(`what's the value?(in meter(m))`));

let converter = parseFloat(
  prompt(`What ype of measurement do you wanna convert?\n 
1-millimeter(mm)\n
2-centimeter(cm)\n
3-decimeter(dm) \n
4-decameter(dam)\n
5-hectometer(hm)\n
6-kilometer(km)
`)
);

switch (converter) {
  case 1:
    alert(`Result: ${value}m = ${value *= 1000}mm`)
    break;
  case 2:
    alert(`Result: ${value}m = ${value *= 100}cm`)
    break;
  case 3:
    alert(`Result: ${value}m = ${value *= 10}dm`)
    break;
  case 4:
    alert(`Result: ${value}m = ${value *= 0.1}dam`)
    break;
  case 5:
    alert(`Result: ${value}m = ${value *= 0.01}hm`)
    break;
  case 6:
    alert(`Result: ${value}m = ${value *= 0.001}km`)
    break;
  default:
    alert("Incorrect choice");
}

