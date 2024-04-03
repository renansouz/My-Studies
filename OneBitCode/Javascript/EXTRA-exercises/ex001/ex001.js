alert("Welcome! please insert your datas.")
let name = prompt("Insert your name: ")
let age = prompt("Isert your age: ")
let ageConfirmation = confirm(`your age is ${age}?`)
if (ageConfirmation){
    ageConfirmation = "yes"
}
  else{
    ageConfirmation = "no"
  }

alert(
  `name: ${name}
  age: ${age}
  Confirmed age? ${ageConfirmation}`
  )