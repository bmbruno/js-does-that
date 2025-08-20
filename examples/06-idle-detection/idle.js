Demo.Idle = window.Demo.Idle || {

    //
    // Demo 1: request permission
    // 

    requestPermission: async () => {

        Demo.clear();

        let permission = await IdleDetector.requestPermission();

        Demo.log(`Idle detection permission: ${permission}`);
    }

};