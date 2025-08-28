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

        Demo.clear();

        let primeLimit = document.getElementById("PrimeLimit").value;
        if (primeLimit === "undefined" || primeLimit == "")
            return;

        // Create new worker
        let worker = new Worker("primes.js");

        // Send our data (prime limit) to the worker
        Demo.log("Calculating primes, please wait...");
        worker.postMessage(primeLimit);

        // When the worker is ready, it'll send the result back here
        worker.onmessage = (event) => {

            Demo.log(`Found ${event.data.length} prime numbers.`);

        }
        
    },

    //
    // Demo 3: sending a notifcation from a worker
    //

    sendNotification: () => {

        Demo.clear();
        Demo.log("Starting a web worker. You'll get a notification soon...");

        let worker = new Worker("notification-demo.js");
        worker.postMessage({ title: "Hi from a Web Worker!", body: "Web workers are a very useful way to send notifications as background processes need to send updates." });
        
    }

};