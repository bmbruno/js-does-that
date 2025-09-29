Demo.Fetch = window.Demo.Fetch || {

    url: "https://www.brandonbruno.com/sites/code/reactdemo/trails.json",

    //
    // Demo 1: get data from a server (GET)
    // 

    getData: async () => {

        try {

            // Get a response from fetch
            let response = await fetch(Demo.Fetch.url);
            console.log(response);

            if (response.ok) {

                let json = await response.json();
                console.log(json);

                Demo.log("Fetch succeeded!");
                Demo.log(`Objects in payload: ${json.length}`);

                json.forEach((element) => {

                    Demo.log(`Name: ${element.name}`);
                    
                });
            }

        } catch (exc) {

            Demo.log(`Error while fetching in getData: ${exc}`);

        }

    },

    //
    // Demo 2: send data to a server (POST)
    //

    sendData: () => {



    }

};