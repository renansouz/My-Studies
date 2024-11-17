fetch('https://api.giphy.com/v1/gifs/random?api_key=FpTTA4QgSFIC7RP3UfjGcOBOQdx2lbfN&tag=basketballr&rating=g')
.then(function(response) {
	return response.json();
})
.then(function(jsonData) {
	console.log(jsonData);
	var gifUrl = jsonData.data.images.original.url
	console.log(gifUrl)

	//Create gif on page
	var gif = document.createElement('img');
	gif.setAttribute('src', gifUrl);
	document.body.appendChild(gif)

	var gifTitle = jsonData.data.title
	var caption = document.createElement("h3")

	caption.innerHTML = gifTitle
	document.body.appendChild(caption)
})