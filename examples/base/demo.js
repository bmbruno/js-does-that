window.Demo = {

    log: (message) => {

        let outputConsole = document.getElementById("Console");
        if (outputConsole)
            outputConsole.innerHTML += `${message}<br/>`;

    },

    clear: () => {

        let outputConsole = document.getElementById("Console");
        if (outputConsole)
            outputConsole.innerHTML = "";
    }

};