let vehicleName1 = prompt("What's the name of vehicle 1?")
let vehicleSpeed1 = parseFloat(prompt(`What's the speed of vehicle 1`))
let vehicleName2 = prompt("What's the name of vehicle 2?")
let vehicleSpeed2 = parseFloat(prompt(`What's the speed of vehicle 2`))

if (vehicleSpeed1 > vehicleSpeed2) {
    alert(`the ${vehicleName1} is faster than ${vehicleName2}`)
} else if (vehicleSpeed1 < vehicleSpeed2) {
    alert(`the ${vehicleName2} is faster than ${vehicleName1}`)
} else {
    alert(`the speed of ${vehicleName1} is equal to the speed of ${vehicleName2}`)
}