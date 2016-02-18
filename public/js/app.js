var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
	$routeProvider.when('/', {
		controller: 'indexCtrl',
		templateUrl: 'views/home.html'
	})

	.when('/buscar', {
		templateUrl: 'views/buscar.html',
		controller: 'BuscarCtrl'
	}) 

	.when('/agregar', {
		templateUrl: 'views/agregar.html',
		controller: 'AgregarCtrl'
	})

	.otherwise({ redirectTo: '/' })

	$locationProvider.html5Mode(true);

});

app.controller('indexCtrl', ['$scope', function ($scope) {
	
}]);

app.controller('BuscarCtrl', ['$scope', function ($scope) {
	
}]);

app.controller('AgregarCtrl', ['$scope', function ($scope) {
	
}]);
