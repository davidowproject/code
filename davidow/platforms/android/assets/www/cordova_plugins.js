cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/pl.makingwaves.estimotebeacons/plugin/src/js/EstimoteBeacons.js",
        "id": "pl.makingwaves.estimotebeacons.EstimoteBeacons",
        "clobbers": [
            "estimote"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.splashscreen/www/splashscreen.js",
        "id": "org.apache.cordova.splashscreen.SplashScreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "file": "plugins/cordova-plugin-eddystone/js/eddystone-plugin.js",
        "id": "cordova-plugin-eddystone.eddystoneplugin",
        "clobbers": [
            "evothings.eddystone"
        ]
    },
    {
        "file": "plugins/cordova-plugin-ble/ble.js",
        "id": "cordova-plugin-ble.BLE",
        "clobbers": [
            "evothings.ble"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "pl.makingwaves.estimotebeacons": "0.7.1",
    "org.apache.cordova.splashscreen": "1.0.0",
    "cordova-plugin-eddystone": "1.0.2",
    "cordova-plugin-ble": "1.0.1"
}
// BOTTOM OF METADATA
});