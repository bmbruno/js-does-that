Demo.Geolocation = window.Demo.Geolocation || {

    // ID of the watchLocation handler
    watchID: 0,

    // Process a successful location request
    success: (pos) => {

        Demo.clear();
        Demo.log(`Latitude: ${pos.coords.latitude}`);
        Demo.log(`Longitude: ${pos.coords.longitude}`);
        Demo.log(`Accuracy: ${pos.coords.accuracy.toFixed(1)}`);

    },

    // Handle an error state
    // 'err.code' values explained here: https://developer.mozilla.org/en-US/docs/Web/API/GeolocationPositionError/code
    error: (err) => {

        Demo.clear();
        Demo.log('Error determining location.');
        Demo.log(`Code: ${err.code}`)
        Demo.log(`Message: ${err.message}`)

    },

    //
    // Demo 1: get a device's location (normal and accurate)
    // 

    getLocation: () => {

        navigator.geolocation.getCurrentPosition(Demo.Geolocation.success, Demo.Geolocation.error);

    },

    getLocationAccurate: () => {

        // Options object
        options = {

            // Max age to allow cached location; 0 = do not use any cached locations
            maximumAge: 0,

            // Millisons before the location request times out (errors)
            timeout: 10000, 
            
            // Try using highly-accurate GPS information, if allowed by the user
            enableHighAccuracy: true

        };

        navigator.geolocation.getCurrentPosition(Demo.Geolocation.success, Demo.Geolocation.error, options);

    },

    //
    // Demo 2: watch a location for changes and update coords
    //

    watchLocation: () => {

        // Process a successful location request
        let successWatch = (pos) => {

            Demo.clear();
            Demo.log("Watching location...");
            Demo.log(`Latitude: ${pos.coords.latitude}`);
            Demo.log(`Longitude: ${pos.coords.longitude}`);
            Demo.log(`Accuracy: ${pos.coords.accuracy.toFixed(1)}`);

        };

        // Start watching location; successWatch() will be called when location changes
        watchID = navigator.geolocation.watchPosition(successWatch, Demo.Geolocation.error);

    },

    stopWatching: () => {

        navigator.geolocation.clearWatch(Demo.Geolocation.watchID);
        Demo.clear();
        Demo.log("Cleared watch.");

    }
};