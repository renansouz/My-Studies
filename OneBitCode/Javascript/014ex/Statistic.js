// function sum(...numbers) {
//   return numbers.reduce((accum, num) => return accum + num)
// }

// console.log(32, 49, 4, 1, 49);


const average = (...numbers) => {
  let sum = numbers.reduce((accum, num) =>  (accum + num), 0)
  return sum / numbers.length
}

// console.log(average(20, 10, 40, 50));

const weightedAverage = (...numbers) => {
  let totalWeightedSum = 0
  let totalWeight = 0

  numbers.forEach(num => {
    totalWeightedSum += num.n * num.p
    totalWeight += num.p;
  })
  return totalWeightedSum / totalWeight
}

console.log(weightedAverage({n: 7, p: 2}, {n: 9, p: 5}, {n: 3, p: 1}));
