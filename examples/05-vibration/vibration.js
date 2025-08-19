Demo.Vibration = window.Demo.Vibration || {

    //
    // Demo 1: short vibration
    // 

    vibrate: () => {

        navigator.vibrate([ 500 ]);

    },

    //
    // Demo 2: vibration pattern
    //

    vibratePattern: () => {

        // Alternates between vibrate and pause
        // This example: 
        //   vibrate 250ms
        //   pause 100ms
        //   vibrate 500ms
        //   pause 100ms
        //   vibrate 1000ms

        navigator.vibrate([ 250, 100, 500, 100, 1000 ]);

    }

};