dwdemo.service('saveProductService', function($http) {

this.saveProduct = function(productInput,callback){

	alert("input"+JSON.stringify(productInput))
    var responsePromise = 	 $http({	
        url: 'http://localhost:8082/application/contact/savecontact',
        method: "POST", 
        data: productInput
        /*headers: {
			"dataType" : "json",
			"contentType" : "application/json",
			"Access-Control-Allow-Origin"  : "*",
			"Access-Control-Allow-Methods" : "*",
			"Access-Control-Allow-Headers" : "*"
			}*/
       
     });
        responsePromise.success(function(data, status, headers, config) {
            callback(data);
        });
        responsePromise.error(function(data, status, headers, config) {
            alert("AJAX failed! because no webservice is attached yet");
        });
}
});