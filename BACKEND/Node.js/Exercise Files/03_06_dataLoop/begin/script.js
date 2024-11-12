fetch('https://hplussport.com/api/products?qty=2&order=name')
.then(function(response) {
	return response.json();
})
.then(function(jsonData) {
	console.log(jsonData)
	var name = jsonData[0].name;
	console.log(name);

	var products = document.createElement('li');
	products.innerHTML = jsonData[0].name;
	document.body.appendChild(products);
})
