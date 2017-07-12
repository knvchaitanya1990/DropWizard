dwdemo.controller('productsSearchController', function(searchProductsService,$scope) {
	
	$scope.loadPage = function(){
		
		$scope.searchResult = "start";
	}
	
	$scope.searchProduct = function(){
		
		searchProductsService.searchProduct($scope.ID,function(data){
			
			$scope.searchResult = data;
		})
	}
	
});


