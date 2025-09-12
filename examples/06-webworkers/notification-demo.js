//
// This worker will send a notification after 5 seconds (to simulate a long-running background process)
// Workers do not have access to DOM objects, so only select APIs are available in this context
//

onmessage = (event) => {

    console.log("notificaiton-demo.js: received a message!");
    console.log(event);

    let title = event.data.title ?? "Default title";
    let body = event.data.body ?? "Default body.";

    setTimeout(() => {
 
       let notification = new Notification(title, { body: body });

    }, 5000);

}