var app = angular.module("app", ['ngRoute']);

app.config(function($routeProvider){

	$routeProvider

	.when('/', {

		templateUrl: './views/main.html',
		controller: 'mainController'

	})

	.when('/second', {

		templateUrl: './views/second.html',
		controller: 'secondController'

	})

});

app.controller('mainController', ['$scope', '$location', '$log', function($scope, $location, $log){

	$log.info($location.path());

}]);

app.controller('secondController', ['$scope', '$location', '$log', function($scope, $location, $log){

	$log.info($location.path());

}]);