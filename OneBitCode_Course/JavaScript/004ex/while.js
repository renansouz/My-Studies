let name = prompt(`What's your name?`)

let trip = confirm(`Have you ever visited any city?`)

let allCities = "";
let counting = 0

while (trip) {
    let city = prompt(`what is the name of the city?`)

    allCities += city + ", "
    counting++

    trip = confirm(`have you ever visited another city?`)
}



alert(`
    name: ${name}\n
    how many cities ${name} visited: ${counting}\n
    which cities ${name} visited: ${allCities}
`)

