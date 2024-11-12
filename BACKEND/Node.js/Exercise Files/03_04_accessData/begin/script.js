fetch('https://hplussport.com/api/products?order=name')
.then(function(response) {
	return response.json();
})
.then(function(jsonData) {
	for (items in jsonData) {
		var productName = jsonData[items].name;
		var products = document.createElement("li")
		products.innerHTML = productName;
		document.body.appendChild(products)

		var productImg = jsonData[items].image
		var image = document.createElement("img")
		image.setAttribute('src',productImg)
		document.body.appendChild(image)
	}
})
