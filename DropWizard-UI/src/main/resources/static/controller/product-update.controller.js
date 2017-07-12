dwdemo.controller('productUpdateController', function(updateProductService,searchProductsService,$scope) {
	
	$scope.lookupProduct = function() {
		$scope.showSpinner = true;
		
		searchProductsService.searchProduct($scope.productInput.id,function(data){
			
			if(data === undefined){
				
			} else {
				$scope.showSpinner = false;
				
				var productInput = data;
				alert("output::"+JSON.stringify(productInput))
				$scope.lookedup = true;
				$scope.productInput.id = productInput.id;
				$scope.productInput.firstname = productInput.firstname;
				$scope.productInput.lastname = productInput.lastname;
				$scope.productInput.phnumber = productInput.phnumber;
				$scope.productInput.address = productInput.address;
				$scope.productInput.category = productInput.category;
				$scope.productInput.email = productInput.email;
			}
		})
	}

	
	$scope.updatebutton =function(){
		
		alert("update button called"+JSON.stringify($scope.productInput))
		updateProductService.updateProduct($scope.productInput,function(data){
			$scope.productInput = "";
		});
	}
});


