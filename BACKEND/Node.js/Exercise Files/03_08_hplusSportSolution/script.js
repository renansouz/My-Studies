fetch('https://hplussport.com/api/products?order=price')
.then(function(response) {
	return response.json();
})
.then(function(jsonData) {
	for(items in jsonData) {
		//Display all the product names
		var productName = jsonData[items].name;
		var product = document.createElement('li');
		product.innerHTML = productName;
		document.body.appendChild(product);

		//Display all the product images
		var productImg = jsonData[items].image;
		var image = document.createElement('img');
		image.setAttribute('src', productImg);
		document.body.appendChild(image);

		//Display the price of each product
		var price = jsonData[items].price;
      var priceElement = document.createElement("h6");
      priceElement.innerHTML = price;
      document.body.appendChild(priceElement)
	}

})
