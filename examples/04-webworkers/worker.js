//
// Listens for a message from the main thread
//

onmessage = (eventData) => {

    console.log("worker.js: received a message!");
    console.log(eventData);

}