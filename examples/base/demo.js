window.Demo = {

    log: (elementID, message) => {

        let console = document.getElementById(elementID);
        if (console)
            console.innerHTML += `${message}<br/>`;

    },

    clear: (elementID) => {

        let console = document.getElementById(elementID);
        if (console)
            console.innerHTML = "";
    }

};