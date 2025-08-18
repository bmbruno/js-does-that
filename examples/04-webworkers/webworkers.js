Demo.Webworkers = window.Demo.Webworkers || {

    //
    // Demo 1: create a worker and pass messages and data back and forth
    // 

    create: () => {

        let worker = new Worker("worker.js");

        // Send a message to the 
        worker.postMessage("Hello, world!");

    }

    //
    // Demo 2: do something intensive
    //

};