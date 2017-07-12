dwdemo.controller('productsListController', function(productsListService,$scope) {
	$scope.loadData = function() {
		 productsListService.getfullProducts(function(data){
		        $scope.productsList = data;
		        console.log("result::"+data);
		    })
	}

});


