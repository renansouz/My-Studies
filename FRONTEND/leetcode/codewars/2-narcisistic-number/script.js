function narcissistic(value) {
  return ("" + value).split("").reduce((sum,c) => sum + c ** ("" + value).length, 0) == value
}

narcissistic(153)