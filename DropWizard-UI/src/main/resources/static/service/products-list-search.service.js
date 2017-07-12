dwdemo.service('searchProductsService', function($http) {

this.searchProduct = function(ID,callback){
    var responsePromise = 	 $http({	
        url: 'http://localhost:8082/application/contact/search/'+ID,
        method: "GET", 
        headers: { 'Content-Type': 'application/json' }
     });
        responsePromise.success(function(data, status, headers, config) {
            callback(data);
        });
        responsePromise.error(function(data, status, headers, config) {
            alert("AJAX failed! because no webservice is attached yet");
        });
}

});