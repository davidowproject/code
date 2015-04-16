// Range beacons screen.
;(function(app)
{
	app.startRangingBeacons = function()
	{
		function onRange(beaconInfo)
		{
			$("#active-beacons").empty();
			$("#bottom-notification").empty();
			$.each(beaconInfo.beacons, function(i, b){
				var c;
					$.each(pieces, function(i, v){
					if(b.minor == v.beaconID) c = v;
				})
			$("#active-beacons").append("<div class='row'><div class='col-xs-5'><a href='#/piece/"+c.id+"'><img class='exploreThumb' src="+c.thumb_url[0]+"></div><div class='col-xs-7' style='padding-left:10px;''><h2>"+c.piece_title+"</h2><h3>by "+c.artist+"</h3></div></div>");				/*if(window.location.href.indexOf('explore') > -1){
					$("#active-beacons").append("<a href='#/piece/"+c.id+"' class='list-item'<div>"+c.piece_title+"</div><span>by "+c.artist+"</span>");
				}else{
					$("#bottom-notification").append("<a href='#/piece/"+c.id+"' class='list-item'<div>"+c.piece_title+"</div><span>by "+c.artist+"</span>");
					$("#bottom-notification").slideToggle(400, function(){
						setTimeout(function(){ $("#bottom-notification").slideToggle()}, 5000);
					})				
				}*/
			})
		}
		function onError(errorMessage)
		{
			alert(errorMessage);
		}
		// Request authorisation, ios8 only.
		//estimote.beacons.requestAlwaysAuthorization();
		estimote.beacons.startRangingBeaconsInRegion({}, onRange, onError);
	};
	window.startRangingBeacons = app.startRangingBeacons;
})(app);