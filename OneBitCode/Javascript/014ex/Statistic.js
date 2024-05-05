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

// console.log(weightedAverage({n: 7, p: 2}, {n: 9, p: 5}, {n: 3, p: 1}));

const median = (...numbers) => {
  if (numbers.length % 2 === 0){
    let mid1 = numbers.length / 2
    let mid2 = (numbers.length /2) - 1
    return (numbers[mid1] + numbers[mid2]) / 2 
  } else {
    let mid = (numbers.length / 2) - 0.5
    return numbers[mid]
  }
}

// console.log(median(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12));

const mode = (...numbers) => {
  let counts = {}
  let maxCount = 0
  let mostFrequent = numbers[0]

  numbers.forEach(item => {
    counts[item] = (counts[item] || 0) + 1;
    if (counts[item] > maxCount) {
      maxCount = counts[item]
      mostFrequent = item
    }
  })

  return mostFrequent;
}

console.log(mode(1, 1, 3, 3, 3, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4));