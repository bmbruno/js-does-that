Demo.Webworkers = window.Demo.Webworkers || {

    //
    // Demo 1: create a worker and pass messages and data back and forth
    // 

    create: () => {

        Demo.clear();
        let message = "Hello, web worker!";
        let worker = new Worker("worker.js?v=1");

        // Send a message to the worker
        Demo.log(`Sending message: ${message}`);
        worker.postMessage(message);

        // Recieve a message from the worker
        worker.onmessage = (event) => {
            Demo.log(`Received message: ${event.data}`);
        }

    },

    //
    // Demo 2: use a worker to calculate prime numbers; report back when done
    //

    calculatePrimes: () => {

        let primeLimit = document.getElementById("PrimeLimit").value;

        if (primeLimit === "undefined" || primeLimit == "")
            return;

        let worker = new Worker("primes.js");

        Demo.clear();
        Demo.log("Calculating primes, please wait...");

        worker.postMessage(primeLimit);

        worker.onmessage = (event) => {

            Demo.log(`Found ${event.data.length} prime numbers.`);

        }
        
    }

};