// File API (info about files - easiest difficulty)
// File System API (provides basic file handling - moderate difficulty)
// File System Access API (provides read/write to native file system - most difficult)

Demo.FileSystemAPI = window.Demo.FileSystemAPI || {

    //
    // Demo 1: read a file from the local disk
    // 

    readFile: async () => {

        Demo.clear();

        let fileHandle = await window.showOpenFilePicker({

            // Specific valid files types
            types: [{
                description: 'File or Markdown Files (txt, md)',
                accept: {
                    'text/*': ['.txt', '.md'],
                },
            }],

            // Allow multiple file selection?
            multiple: false

        });

        // fileHandle is an array; should have at least one file
        if (fileHandle.length == 0) {
            Demo.log("No file selected@");
            return;
        }

        // Get the file object from the handle
        let file = await fileHandle[0].getFile();

        // Read the file contents as text using the File object's text() method
        // This is actually inherited from the Blob interface: https://developer.mozilla.org/en-US/docs/Web/API/Blob
        let content = await file.text();

        // Clean up the contents for display
        content = content.replaceAll("\n", "<br/>");

        // Output file contents
        Demo.log(content);

    },

    //
    // Demo 2: save a new file to the local disk (using the sandbox)
    //

    saveFile: async () => {

        Demo.clear();
        let contents = document.getElementById("FileContents").value;

        if (!contents || contents == "") {
            Demo.log("File contents empty; please provide some content.");
            return;
        }

        try {

            // Choose where to save
            let handle = await window.showSaveFilePicker({
                suggestedName: "demo.txt",
                types: [{
                    description: 'Text File',
                    accept: { 'text/plain': ['.txt'] },
                }],
            });

            // Write to dik
            let writable = await handle.createWritable();
            await writable.write(contents);
            await writable.close();

            Demo.log(`Content saved to disk: ${fileName}`);

        } catch (error) {
            
            Demo.log(`Exception while saving: ${exc}`);

        }

    }

};