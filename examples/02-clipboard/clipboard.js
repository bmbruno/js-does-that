Demo.Clipboard = window.Demo.Clipboard || {

    //
    // Demo 1: copy to clipboard
    // 

    copyToClipboard: async () => {

        try {

            let contents = document.getElementById("TextToCopy").value;
            await navigator.clipboard.writeText(contents);

        } catch (exc) {

            Demo.log(`Copy error: ${exc}`);

        }
    },

    //
    // Demo 2: paste from clipboard
    //

    pasteFromClipboard: async () => {

        try {

            let contents = await navigator.clipboard.readText();
            Demo.log(`Pasted text: ${contents}`);

        } catch (exc) {

            Demo.log(`Paste error: ${exc}`);

        }

    }

};