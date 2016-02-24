cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
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
    "cordova-plugin-eddystone": "1.0.2",
    "cordova-plugin-ble": "1.0.1"
}
// BOTTOM OF METADATA
});