dwdemo.service('productsListService',function($http) {
					this.getfullProducts = function(callback) {
						var responsePromise = $http({
							url : 'http://localhost:8082/application/contact/all',
							method : 'Get',
							headers : {
								'Content-Type' : 'application/json',
							}
						});
						responsePromise.success(function(data, status, headers,config) {
							callback(data);
						});
						responsePromise.error(function(data, status, headers, config) {
									alert("AJAX failed! because no webservice is attached yet");
								});
					}

				});
