var request = new XMLHttpRequest();

request.open('GET', 'https://hplussport.com/api/products?order=name');

request.onload = function() {
	for(item in jsonData) {
		
		//Display all the product names
		var productName = jsonData[item].name;
		var products = document.createElement('li');
		products.innerHTML = productName;
		document.body.appendChild(products);

		//Display all the product images
		var productImg = jsonData[item].image;
		var images = document.createElement('img');
		images.setAttribute('src', productImg);
		document.body.appendChild(images);

	}

	
};

request.send();

fetch('https://hplussport.com/api/products?order=name')
.then(function(response) {
	return response.json();
})
.then(function(jsonData) {
	console.log(jsonData)

	for(item in jsonData) {
		
		//Display all the product names
		var productName = jsonData[item].name;
		var product = document.createElement('li');
		product.innerHTML = productName;
		document.body.appendChild(product);

		//Display all the product images
		var productImg = jsonData[item].image;
		var imageEl = document.createElement('img');
		imageEl.setAttribute('src', productImg);
		document.body.appendChild(imageEl);

	}

})
