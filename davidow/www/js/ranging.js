var shownBeacons = []
/*
{
	id: 0,
	lastFound: 0
}
*/

var onRange = function(foundBeacons){
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
}


var hideBeacon = function(id){
	$.each(pieces, function(i,v){
		if(v.beacon_id == id){
			$("#"+v.id).parent().hide()
		}
	})
}

var showBeacon = function(id){
	$.each(pieces, function(i,v){
		if(v.beacon_id == id){
			$("#"+v.id).parent().show()
		}
	})
}