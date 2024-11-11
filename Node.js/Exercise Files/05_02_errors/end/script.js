fetch('https://api.giphy.com/v1/gifs/random?api_key=AARJBRTT5lJ5PTUWtiLm2xYQOR0QMDue&tag=sea+otter&rating=g')
.then(function(response) {
	if(response.status == '200') {
		return response.json();
	}
	else {console.log('argh!!!', response.status)}
})
.then(function(jsonData) {
	console.log(jsonData);
	var gifUrl = jsonData.data.images.original.url
	console.log(gifUrl)

	//Create gif on page
	var gif = document.createElement('img');
	gif.setAttribute('src', gifUrl);
	document.body.appendChild(gif)

})
.catch(function(error) {
	console.log("Sorry...", error)
})