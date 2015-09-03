// Range beacons screen.
;(function(app)
{
	app.startRangingBeacons = function()
	{
		function onRange(beaconInfo)
		{
			$(".beacon").hide();
			$.each(beaconInfo.beacons, function(i, b){
				var c;
					$.each(pieces, function(i, v){
					if(b.minor == v.beaconID) c = v;
				})
				if(window.location.href.indexOf('explore') > -1){
					window.location.hash = "/piece/" + c.id;
				}else if(window.location.href.indexOf('gallery') > -1){
					console.log($(".row:contains(" + c.piece_title + ")"));
					$(".row:contains(" + c.piece_title + ") .beacon").show();
				}
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