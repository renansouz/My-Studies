fetch('https://api.giphy.com/v1/gifs/random?api_key=xeufGc9QZQAaRa01U5mWJAf8gJ6P8Rjf')
.then(function(response) {
	return response.json();
})
.then(function(jsonData) {
	console.log(jsonData);
	var gifUrl = jsonData.data.images.original.url
	console.log(gifUrl)
	var gifImg = document.createElement("img")
	gifImg.setAttribute("src", gifUrl)
	document.body.appendChild(gifImg)
})