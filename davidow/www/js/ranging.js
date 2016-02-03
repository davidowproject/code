// Application code starts here. The code is wrapped in a
// function closure to prevent overwriting global objects.
(function()
{
	// Dictionary of beacons.
	var beacons = {};
	// Timer that displays list of beacons.
	var timer = null;
	function onDeviceReady()
	{
		// Start tracking beacons!
		setTimeout(startScan, 500);
		// Timer that refreshes the display.
		timer = setInterval(updateBeaconList, 500);
	}
	function startScan()
	{
		$("#found-beacons").append("Searching\n")
		evothings.eddystone.startScan(
			function(beacon)
			{
				$("#found-beacons").append(JSON.stringify(beacon)+"\n")
			},
			function(error)
			{
				$("#found-beacons").append(error+"\n")
			});
	}
	// This calls onDeviceReady when Cordova has loaded everything.
	document.addEventListener('deviceready', onDeviceReady, false);
})(); // End of closure.