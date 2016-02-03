var shownBeacons = []
/*
{
	id: 0,
	timer: 0
}
*/

var onRange = function(beacons){
	//reset dom
	$(".tray-item").hide()
	//beacons come in as array so we sort through them
	$.each(beacons, function(i,beacon){
		//store id for ease of access
		var id = beacon.id
		//check array of beacons to see if its already shown
		var found = 0
		$.each(shownBeacons, function(i,v){
			if(id == v.id){
				v.timer = Date.now()
				found = 1
			}
		})
		/*
		we went thru the list of shown beacons and this beacon wasnt there.
		this means that we have a found a new beacon and we need to show it
		in the dom and add it to shown beacons.
		*/
		if(!found){
			//make dom changes
			showBeacon(id)
			//update shownBeacons with current id and timestamp
			shownBeacons.push({
				id: id,
				timer: Date.now()
			})
		}
	})//end beacon loop
}

var showBeacon = function(id){
	//logic for showing beacon in dom
	$.each(pieces, function(i,v){
		if(v.beacon_id == id){
			//show the piece's bar in the list
			$("#"+v.id).parent().show()
			//show the piece on the map
			
		}
	})
}