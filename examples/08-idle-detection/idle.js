Demo.Idle = window.Demo.Idle || {

    //
    // Demo 1: request permission
    // 

    requestPermission: async () => {

        Demo.clear();

        let permission = await IdleDetector.requestPermission();

        Demo.log(`Idle detection permission: ${permission}`);
    },

    //
    // Demo 2: determine when the user is idle
    //

    monitorIdle: async () => {

        Demo.clear();

        let permission = await IdleDetector.requestPermission();

        if (permission !== "granted") {
            Demo.log("Permission not granted!");
            return;
        }

        Demo.log("Watching for idle status changes...");

        let idleStatus = new IdleDetector();

        idleStatus.start({
            threshold: 60000
        });

        idleStatus.addEventListener("change", () => {

            Demo.log("");
            Demo.log(`Change of idle status!`);
            Demo.log(`UserState: ${idleStatus.userState}`);
            Demo.log(`ScreenState: ${idleStatus.screenState}`);
            
        });

    }

};