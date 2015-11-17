var app = angular.module('app', ['ngRoute', 'iso.directives', 'hljs', 'ngAnimate', 'ngSanitize']);

app.config(function($routeProvider){

	$routeProvider

	.when('/', {

		templateUrl: './views/tileView.html',
		controller: 'tileView'

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
		controller: 'map'

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

app.controller('tileView', ['$scope', '$location', '$log', '$filter', function($scope, $location, $log, $filter){

	window.scope = $scope;
	$scope.pieces = pieces;
	$scope.url = [];
	for(var i = 0; i < pieces.length; i++){
		$scope.url.push(pieces[i].image_URL);
	}

	$("body").scrollLeft(0)
	$("body").scrollTop(0)

  	var orderBy = $filter('orderBy');

  	window.shown = [false,false,false,false,false,false,false]

	$scope.order = function(predicate, reverse) {
    	$scope.pieces = orderBy($scope.pieces, predicate, reverse);
  	};

  	$scope.filterBy = function(medium){
  		window.shown[medium] = !window.shown[medium];
  		
  		$(".piece-item").hide();

  		$("#active-filters").empty()
	  		
  		if(window.shown[0]){
  			$(".piece-item div[data-medium='lithograph']").parent().show()
  			$("#active-filters").append("<span class='filter'>Lithograph</span>")
  		}
  		if(window.shown[1]){
  			$(".piece-item div[data-medium='mixed media']").parent().show()
  			$("#active-filters").append("<span class='filter'>Mixed&nbspMedia</span>")
  		}
  		if(window.shown[2]){
  			$(".piece-item div[data-medium='painting']").parent().show()
  			$("#active-filters").append("<span class='filter'>Painting</span>")
  		}
  		if(window.shown[3]){
  			$(".piece-item div[data-medium='photograph']").parent().show()
  			$("#active-filters").append("<span class='filter'>Photograph</span>")
  		}
  		if(window.shown[4]){
  			$(".piece-item div[data-medium='print']").parent().show()
  			$("#active-filters").append("<span class='filter'>Print</span>")
  		}
  		if(window.shown[5]){
  			$(".piece-item div[data-medium='sculpture']").parent().show()
  			$("#active-filters").append("<span class='filter'>Sculpture</span>")
  		}
  		if(window.shown[6]){
  			$(".piece-item div[data-medium='sculpture']").parent().show()
  			$("#active-filters").append("<span class='filter'>Z-A</span>")
  		}
  		if(window.shown[0] == false && window.shown[1] == false && window.shown[2] == false && window.shown[3] == false && window.shown[4] == false && window.shown[5] == false  && window.shown[6] == false){
	  		$(".piece-item").show();
	  		$("#active-filters").html("Showing all pieces")
  		}

  	}

  	$scope.hideMenu = function(){
  		$("#filter-menu").removeClass("webkit-fade")
  		
  		setTimeout(function(){ 
  			$("#filter-menu").css("display","none")
  		}, 300);
  		
  		$("*").css("overflow-y","initial").css("overflow-x","initial")
  	}

  	$scope.showMenu = function(){
  		$("#filter-menu").css("display","block")
  		$("#filter-menu").css("opactiy","0")

  		setTimeout(function(){ 
	  		$("#filter-menu").addClass("webkit-fade")
  		}, 100);
  	
  		$("*").css("overflow-y","hidden").css("overflow-x","hidden")
  	}

  	/*animate*/
  	$(".searchbox").focusin(function(){
  		$("#search-icon span").addClass("rotate");
  	})
  	$(".searchbox").focusout(function(){
  		$("#search-icon span").removeClass("rotate");
  	})

}]);

app.controller('map', ['$scope', '$location', '$log', '$filter', function($scope, $location, $log, $filter){

	window.scope = $scope;
	$scope.pieces = pieces;
	$scope.url = [];
	for(var i = 0; i < pieces.length; i++){
		$scope.url.push(pieces[i].image_URL);
	}

	window.baseWidth = $("object").outerWidth()

	/*cycle through active pieces*/
	$("#piece-next").click(function(){
		if(activePosition != activeBeacons.length - 1){
			activePosition++;
			$("#slider").animate({scrollLeft: 125 * activeBeacons[activePosition].position - 125}, 400);
			setTimeout(function(){
				$(".tile-piece").addClass("faded");
				$($(".tile-piece")[activeBeacons[activePosition].position]).removeClass("faded");
				$("#piece-title").css('-webkit-opacity', '1').html(activeBeacons[activePosition].piece.piece_title);
				$("#piece-prev").css('-webkit-opacity', '1');
				$("#piece-next").css('-webkit-opacity', '1');
			}, 400);
		}
	})

	$("#piece-prev").click(function(){
		if(activePosition != 0){
			activePosition--;
			$("#slider").animate({scrollLeft: 125 * activeBeacons[activePosition].position - 125}, 400);
			setTimeout(function(){
				$(".tile-piece").addClass("faded");
				$($(".tile-piece")[activeBeacons[activePosition].position]).removeClass("faded");
				$("#piece-title").css('-webkit-opacity', '1').html(activeBeacons[activePosition].piece.piece_title);
				$("#piece-prev").css('-webkit-opacity', '1');
				$("#piece-next").css('-webkit-opacity', '1');
			}, 400);
		}
	})


	/*zoom*/
	$("#zoom-in").on("mousedown",function(){
		if($("object").outerWidth() < 1000){
			
			xPos = $("body").scrollLeft()
			yPos = $("body").scrollTop()
			
			objWidth = $("object").outerWidth()
			
			xRatio = xPos / objWidth
			yRatio = yPos / objWidth
		
			$("object").css("width", $("object").outerWidth() + 100)

			newObjWidth = $("object").outerWidth()

			$("body").scrollTop(newObjWidth * yRatio)
			$("body").scrollLeft(newObjWidth * xRatio)


		}
	})

	$("#zoom-out").on("mousedown",function(){
		if($("object").outerWidth() > baseWidth){

			xPos = $("body").scrollLeft()
			yPos = $("body").scrollTop()
			
			objWidth = $("object").outerWidth()
			
			xRatio = xPos / objWidth
			yRatio = yPos / objWidth
		
			newObjWidth = $("object").outerWidth() - 100;
			if(newObjWidth < baseWidth)newObjWidth = baseWidth;

			$("object").css("width", newObjWidth);

			newObjWidth = $("object").outerWidth()

			$("body").scrollTop(newObjWidth * yRatio)
			$("body").scrollLeft(newObjWidth * xRatio)

		}
	})

	$($("#Artworks circle")[0]).css("fill","red")

	/*svg*/
    $("#svgload").svg({
        onLoad: function()
            {
            var svg = $("#svgload").svg('get');
            svg.load('./img/Floors.svg', {addTo: true,  changeSize: false});        
            },
        settings: {}}
    );  

}]);

app.controller('explore', ['$scope', '$location', '$log', function($scope, $location, $log){

	window.scope = $scope;

	$scope.pieces = pieces;

	startRangingBeacons();

}]);



