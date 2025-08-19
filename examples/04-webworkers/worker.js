//
// Listens for a message from the main thread and responds back
//

onmessage = (event) => {

    console.log("worker.js: received a message!");
    console.log(event);

    postMessage("Hello, boring old JS thread!");

}