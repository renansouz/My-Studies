let arr = [30, 40, 50];
let oldWayArr = [5, 6, arr[0], arr[1], arr[2]];
console.log(oldWayArr);

let newWayArr = [10, 20, ...arr];
console.log(newWayArr);
console.log(...newWayArr);
console.log(10, 20, 30, 40, 50);