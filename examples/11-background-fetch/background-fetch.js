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

        let worker = await navigator.serviceWorker.register("download-serverworker");

        try {

            worker.backgroundFetch.fetch('image-downloads', Demo.BackgroundFetch.urls, {
            
                title: "Downloading images...",
                icons: [{ 
                    sizes: 'XxX',
                    src: 'https://placehold.co/64x64',
                    type: "image/svg+xml",
                    label: "Downloading several sky images."
                }],
                downloadTotal: 0
            });

            Demo.log("Background fetch started...");

        } catch (exc) {

            Demo.log(`Error starting background fetch: ${exc}`);

        }
    }

};

