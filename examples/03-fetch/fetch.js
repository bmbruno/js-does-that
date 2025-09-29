Demo.Fetch = window.Demo.Fetch || {

    dataURL: "https://www.brandonbruno.com/sites/code/reactdemo/trails.json",

    //
    // Demo 1: get data from a server (GET)
    // 

    getData: async () => {

        Demo.clear();

        try {

            // Get a response from fetch
            let response = await fetch(Demo.Fetch.dataURL);
            console.log(response);

            // The response object has many properties; 'ok' is a shortcut for "status = 200-299"
            if (response.ok) {

                // Must parse the response data into one of several types (json, text, blob, etc.)
                // See more: https://developer.mozilla.org/en-US/docs/Web/API/Response#instance_methods
                let json = await response.json();
                console.log(json);

                Demo.log("Fetch succeeded!");
                Demo.log(`Objects in payload: ${json.length}`);

                json.forEach((element) => {

                    Demo.log(`Name: ${element.name}`);
                    
                });
            } else {

                Demo.log(`Response not okay; status: ${response.status}}`);

            }

        } catch (exc) {

            Demo.log(`Error while fetching in getData: ${exc}`);

        }

    },

    //
    // Demo 2: send data to a server (POST)
    //

    sendData: async () => {

        Demo.clear();
        let postURL = document.getElementById("PostURL").value.trim();

        if (!postURL || postURL == "") {
            Demo.log("No POST URL provided.");
            return;
        }

        try {

            // fetch() accepts an object of various options; some are required for a POST
            let options = {

                method: "POST",
                body: JSON.stringify({ firstName: "Homer", lastName: "Simpson" }),
                mode: "no-cors",
                headers: {
                    "Content-Type": "application/json",
                }

            };

            // Send data via POST
            let response = await fetch(postURL, options);

            // The response object has many properties; 'ok' is a shortcut for "status = 200-299"
            if (response.ok) {

                let text = await response.text();
                Demo.log(`Response: ${text}}`);

            } else {

                Demo.log(`Response not okay; status: ${response.status}`);

            }

        } catch (exc) {

            Demo.log(`Error while POSTing in sendData: ${exc}`);

        }

    }

};