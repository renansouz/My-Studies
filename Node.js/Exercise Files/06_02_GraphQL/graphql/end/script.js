fetch("https://swapi-graphql.netlify.app/.netlify/functions/index?query={allFilms{films{title}}}")
.then(function(response) {
    return response.json();
})
.then(function(jsonData) {
    console.log(jsonData)
})