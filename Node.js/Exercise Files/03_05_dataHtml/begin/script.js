fetch('https://hplussport.com/api/products?qty=2&order=name')
.then(function(response) {
	return response.json();
})
.then(function(jsonData) {
	console.log(jsonData)
	var description = jsonData[0].description;
	console.log(description)
})


