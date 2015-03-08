var app = angular.module("app", ['ngRoute']);

app.config(function($routeProvider){

	$routeProvider

	.when('/', {

		templateUrl: './views/main.html',
		controller: 'mainController'

	})

	.when('/explore', {

		templateUrl: './views/explore.html',
		controller: 'mainController'

	})

	.when('/gallery', {

		templateUrl: './views/gallery.html',
		controller: 'mainController'

	})


	.when('/map', {

		templateUrl: './views/map.html',
		controller: 'mainController'

	})

});

app.controller('mainController', ['$scope', '$location', '$log', function($scope, $location, $log){

	$log.info($location.path());

}]);

