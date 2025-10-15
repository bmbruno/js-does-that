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
            navigator.serviceWorker.ready.then(async (worker) => {

                // Start the background fetch
                let download = await worker.backgroundFetch.fetch('image-downloads', Demo.BackgroundFetch.urls, {
                
                    title: "Downloading images...",
                    icons: [{ 
                        sizes: '64x64',
                        src: 'https://placehold.co/64x64',
                        type: "image/svg+xml",
                        label: "Downloading several sky images."
                    }],

                    // In bytes; question for the reader - how would you know this ahead of time?
                    downloadTotal: 5869568
                });

                Demo.log("Background fetch started...");

                download.addEventListener('progress', () => {
                    Demo.log(`Progress: ${download.downloaded} of ${download.downloadTotal}`);

                });

            });

        } catch (exc) {

            Demo.log(`Error starting background fetch: ${exc}`);

        }
    }

};

