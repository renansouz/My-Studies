fetch("https://swapi.dev/api/films")
.then(function(response) {
    return response.json();
})
.then(function(jsonData) {
    console.log(jsonData);
})

