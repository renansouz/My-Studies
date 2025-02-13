function narcissistic(value) {
  return ("" + value)
  .split("")
  .map(num => Number(num) ** ("" + value).length)
  .reduce((sum, c) => sum + c) == value
}

narcissistic(153)