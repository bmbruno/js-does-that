Demo.Webworkers = window.Demo.Webworkers || {

    //
    // Demo 1: create a worker and pass messages and data back and forth
    // 

    create: () => {

        let worker = new Worker("worker.js");

        // Send a message to the worker
        worker.postMessage("Hello, world!");

        worker.onmessage = (event) => {
            alert(event);
        }

    }

    // TODO: recieve a message from the worker


    //
    // Demo 2: do something intensive
    //

};