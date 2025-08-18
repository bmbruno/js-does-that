Demo.Notifications = window.Demo.Notifications || {

    //
    // Demo 1: request notificatio permission
    //

    requestPermission: async () => {

        Demo.clear();
        Demo.log("Requested notification permission...");

        let result = await Notification.requestPermission();
        Demo.log(`Permission: ${result}`);

    },

    //
    // Demo 2: send a device-native notification (NOTE: this will only work in a secure HTTPS context )
    //

    sendNotification: async () => {

        Demo.clear();

        // Get permission to send notifications
        let result = await Notification.requestPermission();

        if (result === "granted") {

            // Set up notification options
            let options = {

                body: "This is your reminder to drink lots of water. Stay hydrated!",
                img: "/content/notification-image.png",
                icon: "/content/notification-icon.png"

            };

            // Create a notification
            let notification = new Notification("Time to drink!", options);

            Demo.log("Notification sent!");

        } else {

            Demo.log("User has denied notification permissions.");

        }

    }
   
};