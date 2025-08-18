//
// Listens for a message from the main thread
//

onmessage = (event) => {

    console.log("worker.js: received a message!");
    console.log(event);
    console.log(event.data);

}

//
// Worker logic
//

