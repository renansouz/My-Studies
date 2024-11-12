var request = new XMLHttpRequest();

request.open('GET', 'https://hplussport.com/api/products');

request.onload = function() {
   var response = request.response;
   var parsedData = JSON.parse(response)	
   console.log(parsedData);
}

request.send(); 