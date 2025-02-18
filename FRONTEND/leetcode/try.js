function narcissistic(value) {
  console.log( ('' + value)
    .split("")
    .map(n => Number(n) ** ('' + value).length).reduce((a,b) => a+b) == value)
}
let string = "153"
let number = 153

console.log(string == number)