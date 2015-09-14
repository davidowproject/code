var app = angular.module('app', ['ngRoute', 'ngAnimate']);

app.config(function($routeProvider){

	$routeProvider

	.when('/', {

		templateUrl: './views/gallery.html',
		controller: 'gallery'

	})

	.when('/explore', {

		templateUrl: './views/explore.html',
		controller: 'mainController'

	})

	.when('/gallery', {

		templateUrl: './views/gallery.html',
		controller: 'gallery'

	})


	.when('/map', {

		templateUrl: './views/map.html',
		controller: 'mainController'

	})

	.when('/tileView', {

		templateUrl: './views/tileView.html',
		controller: 'tileView'

	})

		.when('/piece/:id', {

		templateUrl: './views/piece.html',
		controller: 'piece'

	})


	.when('/tutorial',{

		templateUrl: './views/tutorial.html',
		controller: 'mainController'

	})

	.when('/about',{

		templateUrl: './views/about.html',
		controller: 'mainController'

	})

	.when('/settings',{

		templateUrl: './views/settings.html',
		controller: 'settings'

	})

	.when('/signin',{

		templateUrl: './views/signin.html',
		controller: 'mainController'

	})

	.when('/profile',{

		templateUrl: './views/profile.html',
		controller: 'mainController'
	})

});

app.controller('mainController', ['$scope', '$location', '$log', function($scope, $location, $log){


}]);


app.controller('gallery', ['$scope', '$location', '$log', function($scope, $location, $log){

	$scope.pieces = pieces;
	
	
}]);


app.controller('piece', ['$scope', '$location', '$routeParams', function($scope, $location, $routeParams){

	window.scope = $scope;
	$scope.pieces = pieces;

	$scope.id = $routeParams.id;

	for(var i = 0; i < pieces.length; i++){
		if($scope.id == pieces[i].id){
			$scope.currentPiece = pieces[i];
		}
	}

}]);

app.controller('tileView', ['$scope', '$location', '$log', function($scope, $location, $log){

	window.scope = $scope;

	$scope.pieces = pieces;

	$scope.url = [];
	for(var i = 0; i < pieces.length; i++){
		$scope.url.push(pieces[i].image_URL);
	}

}]);

app.controller('explore', ['$scope', '$location', '$log', function($scope, $location, $log){

	window.scope = $scope;

	$scope.pieces = pieces;

	startRangingBeacons();

}]);


app.controller('settings', ['$scope', '$location', '$log', function($scope, $location, $log){
	$(document).ready(function(){
		if(localStorage.theme == "dark"){
			$("#dark").prop('checked', true);
		}else{
			$("#light").prop('checked', true);
		}
	});
	$("#dark").change(function(){
		if($(this).val() == "on"){
			localStorage.setItem("theme", "dark");
			$("link[href='css/stylesBlue.css']").remove();
			$("link[href='css/masterLight.css']").remove();
			var headID = document.getElementsByTagName("head")[0];
			var cssNode = document.createElement('link');
			cssNode.type = 'text/css';
			cssNode.rel = 'stylesheet';
			cssNode.href = 'css/master.css';
			cssNode.media = 'screen';
			headID.appendChild(cssNode);
			var headID = document.getElementsByTagName("head")[0];
			var cssNode = document.createElement('link');
			cssNode.type = 'text/css';
			cssNode.rel = 'stylesheet';
			cssNode.href = 'css/stylesYellow.css';
			cssNode.media = 'screen';
			headID.appendChild(cssNode);
		}
	});
	$("#light").change(function(){
		if($(this).val() == "on"){
			localStorage.setItem("theme", "light");
			$("link[href='css/stylesYellow.css']").remove();
			$("link[href='css/master.css']").remove();
			var headID = document.getElementsByTagName("head")[0];
			var cssNode = document.createElement('link');
			cssNode.type = 'text/css';
			cssNode.rel = 'stylesheet';
			cssNode.href = 'css/masterLight.css';
			cssNode.media = 'screen';
			headID.appendChild(cssNode);
			var headID = document.getElementsByTagName("head")[0];
			var cssNode = document.createElement('link');
			cssNode.type = 'text/css';
			cssNode.rel = 'stylesheet';
			cssNode.href = 'css/stylesBlue.css';
			cssNode.media = 'screen';
			headID.appendChild(cssNode);
		}
	});
}]);


