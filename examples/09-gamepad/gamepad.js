Demo.Gamepad = window.Demo.Gamepad || {

    // Reference to all connected gamepads
    gamepads: [],

    //
    // Demo 1: view controller input
    //

    viewInput: () => {

        // Start input loop
        requestAnimationFrame(Demo.Gamepad.update);
    },

    // Fires from the window object when a gamepad is connected to the device
    connected: (e) => {

        Demo.clear();
        Demo.log("Controller connected!");
        Demo.log(`ID: ${e.gamepad.id}`);
        Demo.log(`Num of buttons: ${e.gamepad.buttons.length}`);
        Demo.log(`Num of axes: ${e.gamepad.axes.length}`);

        requestAnimationFrame(Demo.Gamepad.update);

    },

    // Fires from the window object when a gamepad is disconnected from the device
    disconnected: (e) => {

        Demo.clear();
        Demo.log("Controller disconnected!");
        Demo.log(`ID: ${e.gamepad.id}`);

    },

    // The main loop that reads and displays the controller's state
    update() {
        
        // Get an array of connected gamepads
        const gamepads = navigator.getGamepads();

        // Exit loop if nothing connected
        if (gamepads.length === 0 || gamepads[0] == null) {

            Demo.log("No controllers connected.")
            return;
        }

        // Clear all input displays
        //let inputs = document.querySelectorAll("input-display");
        //inputs.forEach((element) => element.innerHTML = "" );

        // Get the first controller (assuming an Xbox controller is the first one)
        let gamepad = gamepads[0];
        
        // TODO: use a nice Xbox controller graphic?

        // Display button presses
        gamepad.buttons.forEach((button, index) => {
            if (button.pressed) {

                let inputDisplay = document.getElementById(`Button_${index}`);

                if (inputDisplay)
                    inputDisplay.innerHTML = "PRESSED";

                // Demo.log(`Button ${index}: <span class="input-value">Pressed</span>`);
            }
        });

        // Display joystickn movement (axis between -1.0 and 1.0)
        gamepad.axes.forEach((axisValue, index) => {

            // Considered a deadzone - need to dial this in for the demo
            if (Math.abs(axisValue) > 0.1) {
                
                Demo.log(`Axis ${index}: <span class="input-value">${axisValue.toFixed(4)}</span>`);
            }
        });

        // Loop continuously
        requestAnimationFrame(Demo.Gamepad.update);
    }

};

(function() {

    window.addEventListener("gamepadconnected", Demo.Gamepad.connected);
    window.addEventListener("gamepaddisconnected", Demo.Gamepad.disconnected);

})();