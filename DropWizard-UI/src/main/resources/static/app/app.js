var dwdemo = angular.module('dw', ['ui.router']);

dwdemo.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when("", "/home");

    $stateProvider
       
        .state("dw", {
            url: "/dw",
            templateUrl: "views/producsthome.html",
            controller : 'productsHomeController'
        })
        .state("dw.ProductList", {
            url: "/ProductList",
            templateUrl : 'views/ProductList.html',
		    controller :'productsListController'
        })
        .state("dw.ProductSearch", {
            url: "/ProductSearch",
            templateUrl : 'views/ProductSearch.html',
		    controller :'productsSearchController'
        })
        .state("dw.Productdelete", {
            url: "/Productdelete",
            templateUrl : 'views/Productdelete.html',
		    controller :'DeleteProductController'
        })
        .state("dw.Productupdate", {
            url: "/Productupdate",
            templateUrl : 'views/Productupdate.html',
	        controller :'productUpdateController'
        })
        
        .state("dw.SaveProduct", {
            url: "/SaveProduct",
            templateUrl : 'views/ProductInsert.html',
	        controller :'saveproductController'
        })
        
         .state("home", {
            url: "/home",
            templateUrl: "views/home.html"
        })
    ;
});

