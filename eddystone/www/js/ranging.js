// Dictionary of beacons.
var beacons = [];

// Timer that displays list of beacons.
var timer = null;

function onDeviceReady()
{
    // Start tracking beacons!
    setTimeout(startScan, 500);

    // Timer that refreshes the display.
    timer = setInterval(function(){onRange(beacons)}, 1000);
}

function startScan()
{
    evothings.eddystone.startScan(
        function(beacon)
        {
            //todo error handling if no bid
        	beacons = []
        	if(beacon.bid){
	            bid = uint8ArrayToString(beacon.bid)
	            bid = bid.replace(/\s+/g, '')
	            bid = parseInt(bid, 16)
	            beacons.push({id: bid})
        	}
        },
        function(error)
        {
        });
}


var shownBeacons = []
/*
{
	id: 0,
	lastFound: 0
}
*/
var onRange = function(foundBeacons){
	if(foundBeacons.length && window.location.hash.indexOf("map")>0){
		if(shownBeacons.length){
			$.each(shownBeacons, function(i, shownBeacon){
				$.each(foundBeacons, function(j, foundBeacon){
					if(shownBeacon.id == foundBeacon.id){
						shownBeacon.lastFound = Date.now()
					}else if(Date.now() - shownBeacon.lastFound > 10000){
						hideBeacon(shownBeacon.id)
						shownBeacons.splice(i,1)
					}
				})
			})
		}
		$.each(foundBeacons,function(i, foundBeacon){
			var found = 0
			$.each(shownBeacons, function(j, shownBeacon){
				if(foundBeacon.id == shownBeacon.id){
					found = 1
				}
			})
			if(!found){
				showBeacon(foundBeacon.id)
				shownBeacons.push({id: foundBeacon.id, lastFound: Date.now()})
			}
		})
	}else{
		//temp, do some stuff here to use cooldown before doing stuff
		$(".tray-item").fadeOut()
		shownBeacons = []
	}
}
var hideBeacon = function(id){
	$.each(pieces, function(i,v){
		if(v.beacon_id == id){
			$("#"+v.id).parent().fadeOut()
			$($("#Artworks circle")[v.map_circle]).css({"fill":"#4FC5E7"})
		}
	})
}
var showBeacon = function(id){
	$.each(pieces, function(i,v){
		if(v.beacon_id == id && id != 0){
			$("#"+v.id).parent().fadeIn()
			$($("#Artworks circle")[v.map_circle]).css({"fill":"red"})
		}
	})
}

function uint8ArrayToString(uint8Array)
{
	function format(x)
	{
		var hex = x.toString(16);
		return hex.length < 2 ? '0' + hex : hex;
	}
	var result = '';
	for (var i = 0; i < uint8Array.length; ++i)
	{
		result += format(uint8Array[i]) + ' ';
	}
	return result;
}

document.addEventListener('deviceready', onDeviceReady, false);
