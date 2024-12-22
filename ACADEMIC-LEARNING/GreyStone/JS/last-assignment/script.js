function minimumNum(n1, n2, n3) {
  let minimum = n1
  if (minimum > n2) {
    minimum = n2
  } 

  if (minimum > n3) {
    minimum = n3
  }
  alert("The minimum number is: " + minimum);
}

minimumNum(3, 5, 9)