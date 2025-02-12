let romanToInt = roman => {
  const romanMap = {
    'M': 1000,
    'D': 500,
    'C': 100, 
    'L': 50,
    'X': 10,
    'V': 5,
    'I': 1
  }
  let total = 0
  for(let i = 0; i <roman.length; i++) {
    if(romanMap[roman[i]] < romanMap[roman[i+1]]) {
      total -= romanMap[roman[i]]
    } else {
      total += romanMap[roman[i]]
    }
  }
  return total
}

// first try

// var romanToInt = function(roman) {
//   let nums = []
//   let newNums = []
   
//       roman
//       .split("")
//       .map(char => {
//         char == "M" ? char = 1000 : false 
//         char == "D" ? char = 500 : false
//         char == "C" ? char = 100 : false
//         char == "L" ? char = 50 : false
//         char == "X" ? char = 10 : false
//         char == "V" ? char = 5 : false
//         char == "I" ? char = 1 : false
//         nums.push(char)
//         return char
//       })
//       .forEach((num,index) => {
//         if (index < roman.split("").length && num < nums[index + 1]) {
//           nums[index +1] = nums[index +1] - num
//           nums[index] = 0
//         }
//         newNums.push(nums[index])
//     })
//     return newNums.reduce((a,b) => a+b, 0)
// };

romanToInt('MCMXCIV') //1994