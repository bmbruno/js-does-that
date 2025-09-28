Demo.Gamepad = window.Demo.Gamepad || {

    // Reference to all connected gamepads
    gamepads: [],

    init: () => {

        window.addEventListener("gamepadconnected", (e) => Demo.Gamepad.connected(e));
        window.addEventListener("gamepaddisconnected", (e) => Demo.Gamepad.disconnected(e));

    },

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

        

    },

    // The main loop that reads and displays the controller's state
    updateGamepads() {
        
        // Get an array of connected gamepads
        const gamepads = navigator.getGamepads();
        if (gamepads.length === 0 || !gamepads[0]) {
            // No gamepad connected, stop the loop
            return;
        }

        // Get the first controller (assuming an Xbox controller is the first one)
        gamepad = gamepads[0];
        const inputsDisplay = document.getElementById("inputs-display");
        let inputHTML = '';

        // Display button presses
        gamepad.buttons.forEach((button, index) => {
            if (button.pressed) {
                inputHTML += `<p>Button ${index}: <span class="input-value">Pressed</span></p>`;
            }
        });

        // Display axis movement (joysticks)
        gamepad.axes.forEach((axisValue, index) => {
            // The axis value is a float between -1.0 and 1.0
            if (Math.abs(axisValue) > 0.1) { // A small dead zone to prevent jitter
                inputHTML += `<p>Axis ${index}: <span class="input-value">${axisValue.toFixed(4)}</span></p>`;
            }
        });

        // Update the HTML with the current inputs
        inputsDisplay.innerHTML = inputHTML || '<p>No input detected.</p>';

        // Loop continuously
        requestAnimationFrame(updateGamepads);
    }


};

(function() {

    window.addEventListener("gamepadconnected", Demo.Gamepad.connected);
    window.addEventListener("gamepaddisconnected", Demo.Gamepad.disconnected);

})();