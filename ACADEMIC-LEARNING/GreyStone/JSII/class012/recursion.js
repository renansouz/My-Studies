// function f2(n) {
// 	if (n === 0)
// 		return 0;

// 	if (n % 2 === 0)
// 		return n + f2(n - 2);

// 	return f2(n - 1);
// }

// console.log(f2(5)) 

function sumEven(n) { 
  if (n <= 1) {
    return 0;
  }
  if (n % 2 === 0) {
    return n + sumEven(n - 2); 
  }
  return sumEven(n - 1); 
}