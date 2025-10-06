Demo.IndexedDB = window.Demo.IndexedDB || {

    dbName: 'USS-Enterprise-1701-D',
    dbStore: 'Crew',

    //
    // Database functionality functions
    //

    // Handles database creation
    onUpgradeNeeded = (e) => {

        // Database is available through the event
        database = e.target.result;

        // If the database doesn't have the store we need, create it
        if (!database.objectStoreNames.contains(Demo.IndexedDB.dbName)) {
            
            db.createObjectStore(Demo.IndexedDB.dbStore, { keyPath: 'id', autoIncrement: true });

        }
    },

    connect: () => {



    },

    //
    // Demo 1: save some data to the database
    // 

    saveToDatabase: () => {

        // Open a specific database and database version
        let database = indexedDB.open(Demo.IndexedDB.dbName, 1);

        // TODO: move this connection logic to the 'connect' function

        database.onupgradeneeded = Demo.IndexedDB.onUpgradeNeeded;

        // Handle successful database connection
        database.onsuccess = (event) => {
            db = event.target.result;
            Demo.log('Database opened successfully');
        };

        // Handle database connection errors
        database.onerror = (event) => {
            Demo.error('Database error:', event.target.error);
        };

    },

    //
    // Demo 2: get data from database
    //

    queryDatabase: () => {



    }

};