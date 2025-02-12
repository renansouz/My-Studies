function narcissistic(val) {
  console.log(
    val.toString()
    .split('')
    .reduce((sum, c) => sum + c ** val.toString().length, 0) == val); 
}


//first try

// function narcissistic(value){
//   let temp = 0
//   let valStr = value.toString()
//   valStr.split("").map(n => {
//     let num = Number(n)
//     num = num ** valStr.length
//     temp += num
//   })
//   if (value < 10 || value == temp) {
//     return true
//   }
//   return false
// }

narcissistic(153)