let myArr = [1,2,3,4,5]
let newArr = myArr.map(e => {
  if (e % 2 === 0) {
    return 'lol'
  } else {
    return e
  }
})

console.log(newArr);