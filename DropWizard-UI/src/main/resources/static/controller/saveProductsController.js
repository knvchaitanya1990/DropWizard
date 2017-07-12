dwdemo.controller('saveproductController', function(saveProductService,$scope) {
	
	$scope.productInput = {};
	$scope.savebutton = function(){
		saveProductService.saveProduct($scope.productInput,function(data){
			alert("New PhoneBook Entry Saved Sucessfully");
			console.log("response:"+data);
			$scope.productInput = "";
		});
	}
});


