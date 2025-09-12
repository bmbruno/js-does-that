Demo.Gamepad = window.Demo.Gamepad || {

    // Reference to all connected gamepads
    gamepads: [],

    // Fires from the window object when a gamepad is connected to the device
    connected: (e) => {

        Demo.clear();
        Demo.log("Controller connected!");
        Demo.log(`ID: ${e.gamepad.id}`);
        Demo.log(`Num of buttons: ${e.gamepad.buttons.length}`);
        Demo.log(`Num of axes: ${e.gamepad.axes.length}`);

    },

    // Fires from the window object when a gamepad is disconnected from the device
    disconnected: (e) => {

        Demo.clear();
        Demo.log("Controller disconnected!");
        Demo.log(`ID: ${e.gamepad.id}`);

    },

    //
    // Demo 1: view controller input
    // 

    viewInput: () => {

        

    }

    //
    // Demo 2: TODO
    //


};

(function() {

    window.addEventListener("gamepadconnected", Demo.Gamepad.connected);
    window.addEventListener("gamepaddisconnected", Demo.Gamepad.disconnected);

})();