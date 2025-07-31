window.Demo = {

    log: (message) => {

        let console = document.getElementById("Console");
        if (console)
            console.innerHTML += `${message}<br/>`;

    },

    clear: () => {

        let console = document.getElementById("Console");
        if (console)
            console.innerHTML = "";
    }

};