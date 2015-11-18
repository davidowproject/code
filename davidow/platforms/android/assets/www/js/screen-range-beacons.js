// Range beacons screen.
;(function(app)
{
	app.startRangingBeacons = function()
	{
		var lastTimeWithBeacons = 0;
		function onRange(beaconInfo)
		{
			//reset vars
			activeBeacons = [];
			activePosition = 0;
			$(".beacon").hide();

			//build list of what we found
			$.each(beaconInfo.beacons, function(i, b){
				var c;
				var pos;
					$.each(pieces, function(i, v){
					if(b.minor == v.beaconID){
						c = v;
						pos = i;
						activeBeacons.push({piece: v, position: i})
					}
				})

				//determine page
				if(window.location.href.indexOf('explore') > -1){
					//explore screen
					window.location.hash = "/piece/" + c.id;
				}else if(window.location.href.indexOf('gallery') > -1){
					//gallery screen
					$(".row:contains(" + c.piece_title + ") .beacon").show();
				}else if(window.location.href.indexOf('map') > -1){
					
					//map screen

				} //end if/else
			})//end each beacon

			//on the map page, we do things after the loop of found beacons

			if(window.location.href.indexOf('map')>-1){

				if(new Date().getTime() - lastTimeWithBeacons > 15000 && activeBeacons.length > 0){
					$(".tile-piece").addClass("faded");

					//highlight a dot on the map
					$.each(activeBeacons, function(i,v){
						if(v.piece.beaconID == "1002" && aniLoop1 == 0){
							$($(".tile-piece")[0]).removeClass("faded");
							aniLoop1 = setInterval(function(){
								if($($("#Artworks circle")[0]).attr("class").indexOf("found") == 0){
									$($("#Artworks circle")[0]).attr("class","normal")
								}else{
									$($("#Artworks circle")[0]).attr("class","found")
								}
								
							},1000)
						}
						if(v.piece.beaconID == "1003" && aniLoop2 == 0){
							aniLoop2 = setInterval(function(){
								$($(".tile-piece")[1]).removeClass("faded");
								if($($("#Artworks circle")[1]).attr("class").indexOf("found") == 0){
									$($("#Artworks circle")[1]).attr("class","normal")
								}else{
									$($("#Artworks circle")[1]).attr("class","found")
								}
								
							},1000)
						}
					})
					lastTimeWithBeacons = new Date().getTime();
				}

			} //end map if
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