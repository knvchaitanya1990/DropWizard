dwdemo.service('deleteProductService', function($http) {

	this.deleteProduct = function(ID, callback) {
		var responsePromise = $http({
			url : 'http://localhost:8082/application/contact/delete/' + ID,
			method : "DELETE"
		});
		responsePromise.success(function(data, status, headers, config) {
			callback(data);
		});
		responsePromise.error(function(data, status, headers, config) {
			alert("AJAX failed! because no webservice is attached yet");
		});
}

});