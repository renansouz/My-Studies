//Remember to replace the api key with YOUR api key
fetch('https://api.giphy.com/v1/gifs/random?api_key=bwBAcjO5j2Cec47TG7flBCn7Gdw57Fo8&tag=sea+otter&rating=g')
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

	//Add gif title
	var titleText = jsonData.data.title;
	var title = document.createElement('h3');
	title.innerText = titleText;
	document.body.appendChild(title);
})