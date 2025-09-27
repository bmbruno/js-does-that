Demo.BackgroundFetch = window.Demo.BackgroundFetch || {

    urls: [

        "https://www.brandonbruno.com/sites/code/jsdoesthat/demo/sunrise.jpg",
        "https://www.brandonbruno.com/sites/code/jsdoesthat/demo/nightsky.jpg",
        "https://www.brandonbruno.com/sites/code/jsdoesthat/demo/sunset.jpg"

    ],

    //
    // Demo 1: download several images in the background
    // 

    downloadFiles: async () => {

        /*
        // Check for existing service workers and remove them (so we start fresh every time)
        let registeredWorkers = await navigator.serviceWorker.getRegistrations();
        registeredWorkers.forEach((worker) => {
            worker.unregister().then(() => {
                console.log("Service worker unregistered.");
            })
        });
        */

        // Register server worker to handle background fetch
        let worker = await navigator.serviceWorker.register("download-serviceworker.js");
        Demo.log("Service worker has been registered.");

        // Bonus API: BroadcastChannel for sending/receiving messages across the entire app
        let channel = new BroadcastChannel("bgFetchChannel");
        channel.addEventListener("message", (e) => {

            if (e.data.complete) {
                Demo.log(`Complete! Files downloaded: ${e.data.total}`);
            }

        });

        try {

            // Wait for the service worker to be ready
            navigator.serviceWorker.ready.then(worker => {

                // Start the background fetch
                worker.backgroundFetch.fetch('image-downloads', Demo.BackgroundFetch.urls, {
                
                    title: "Downloading images...",
                    icons: [{ 
                        sizes: 'XxX',
                        src: 'https://placehold.co/64x64',
                        type: "image/svg+xml",
                        label: "Downloading several sky images."
                    }],
                    downloadTotal: 12131231
                });

                Demo.log("Background fetch started...");

            });

        } catch (exc) {

            Demo.log(`Error starting background fetch: ${exc}`);

        }
    }

};

