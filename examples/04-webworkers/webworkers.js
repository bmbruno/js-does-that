Demo.Webworkers = window.Demo.Webworkers || {

    //
    // Demo 1: create a worker and pass messages and data back and forth
    // 

    create: () => {

        let worker = new Worker("worker.js");

        // Send a message to the worker
        worker.postMessage("Hello, world!");

        // Recieve a message from the server
        worker.onmessage = (event) => {
            alert(event);
        }

    },

    //
    // Demo 2: use a worker to calculate prime numbers; report back when done
    //

    calculatePrimes: () => {

        let worker = new Worker("primes.js");

        

    }

};