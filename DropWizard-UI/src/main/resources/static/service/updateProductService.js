dwdemo.service('updateProductService', function($http) {

	this.updateProduct = function(productInput, callback) {
		alert("updateProductService input:::"+JSON.stringify(productInput))
		var responsePromise = $http({
			url : 'http://localhost:8082/application/contact/update',
			method : "POST",
			data : productInput
			/*headers: {
				"dataType" : "json",
				"contentType" : "application/json",
				"Access-Control-Allow-Origin"  : "*",
				"Access-Control-Allow-Methods" : "*",
				"Access-Control-Allow-Headers" : "*"
				}*/
			
		});
		responsePromise.success(function(data, status, headers, config) {
			alert("PhoneBook Entry Updated Sucessfully");
			console.log("response:"+data);
			callback(data);
		});
		responsePromise.error(function(data, status, headers, config) {
			alert("AJAX failed! because no webservice is attached yet");
			console.log("response:"+data);
		});
	}
});