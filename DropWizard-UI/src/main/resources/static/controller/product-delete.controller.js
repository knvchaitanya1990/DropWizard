dwdemo.controller('DeleteProductController', function(deleteProductService,$scope) {
	
	$scope.deleteProductItem = function(){
		deleteProductService.deleteProduct($scope.ID,function(data){
			$scope.searchResult = data;
			alert("Entry  Sucessfully Deleted from Table.");
			$scope.ID = "";
			console.log(data);
		})
	}
});


