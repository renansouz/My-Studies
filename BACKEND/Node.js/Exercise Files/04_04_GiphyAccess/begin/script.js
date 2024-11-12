fetch('https://api.giphy.com/v1/gifs/random?api_key=bwBAcjO5j2Cec47TG7flBCn7Gdw57Fo8&tag=squirrel&rating=g')
.then(function(response) {
	return response.json();
})
.then(function(jsonData) {
	console.log(jsonData);
})