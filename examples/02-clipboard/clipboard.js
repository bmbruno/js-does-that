Demo.Clipboard = window.Demo.Clipboard || {

    //
    // Demo 1: copy to clipboard
    // 

    copyToClipboard: () => {

        let contents = "";

        navigator.clipboard.write(contents);

    },

    //
    // Demo 2: paste from clipboard
    //

    pasteFromClipboard: () => {

        let contents = navigator.clipboard.read();

    }

};