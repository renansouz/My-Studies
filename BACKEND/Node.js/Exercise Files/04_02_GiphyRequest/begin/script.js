fetch("https://api.giphy.com/v1/gifs/random?api_key=xeufGc9QZQAaRa01U5mWJAf8gJ6P8Rjf")
.then(function(response) {
  return response.json();
})
.then(function(jsonData) {
  console.log(jsonData);
})