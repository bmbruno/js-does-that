/*

This is an incomplete demo, but feel free to learn from what's already here!

*/

Demo.IndexedDB = window.Demo.IndexedDB || {

    dbName: 'USS-Enterprise-1701-D',
    dbStore: 'Crew',

    //
    // Database functionality functions
    //

    // Handles database creation
    onUpgradeNeeded: (e) => {

        // Database is available through the event
        let database = e.target.result;

        // If the database doesn't have the store we need, create it
        if (!database.objectStoreNames.contains(Demo.IndexedDB.dbName)) {
            
            database.createObjectStore(Demo.IndexedDB.dbStore, { keyPath: 'id', autoIncrement: true });
            Demo.log(`Created new store: ${Demo.IndexedDB.dbStore}`);

        }
    },

    connect: () => {



    },

    //
    // Demo 1: save some data to the database
    // 

    saveToDatabase: () => {

        Demo.clear();

        // Open a specific database and database version
        let requestToOpen = indexedDB.open(Demo.IndexedDB.dbName, 1);

        // If database isn't created, create it here
        requestToOpen.onupgradeneeded = Demo.IndexedDB.onUpgradeNeeded;

        // Handle successful database connection
        requestToOpen.onsuccess = (event) => {

            // Store a reference to the database
            let database = event.target.result;
            Demo.log(`Database opened successfully (${database.name})`);

            let firstName = document.getElementById("FirstName");
            let lastName = document.getElementById("LastName");

            if ((!firstName || !lastName) || (firstName.value == "" || lastName.value == "")) {
                Demo.log("Please enter a first and last name to save.");
                return;
            }

            // Start a read-write transaction (second param is the mode)
            // Available modes: 'readonly', 'readwrite', 'readwriteflush'
            let transaction = database.transaction(database[Demo.IndexedDB.dbStore], 'readwrite');
            let store = transaction.objectStore(Demo.IndexedDB.dbStore);
            
            // Create a crew member object
            let crewMember = {
                name: `${firstName.value.trim()} ${lastName.value.trim()}`,
                rank: "Ensign",
                assigned: 2363
            }

            try {

                // Store the objecet
                let addRequest = store.add(crewMember);

                // Handle success and error outcomes for the transaction request object
                addRequest.onsuccess = () => {
                    Demo.log(`Data added! New crew member: ${crewMember.name} (${crewMember.rank}).`);
                    firstName.value = '';
                    lastName.value = '';
                };

                addRequest.onerror = (event) => {
                    Demo.error('Add data error:', event.target.error);
                };

            } catch (exc) {

                Demo.log(`Error adding to database: ${exc}`);
            }

        };

        // Handle database connection errors
        requestToOpen.onerror = (event) => {
            Demo.log('Database error:', event.target.error);
        };

    },

    //
    // Demo 2: get data from database
    //

    queryDatabase: () => {



    }

};