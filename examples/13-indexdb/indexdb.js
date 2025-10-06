Demo.IndexedDB = window.Demo.IndexedDB || {

    dbName: '',
    dbTable: '',



    //
    // Demo 1: save some data to the database
    // 

    saveToDatabase: () => {

        // Open a specific database and database version
        let database = indexedDB.open(Demo.IndexedDB.dbName, 1);

    },

    //
    // Demo 2: get data from database
    //

    queryDatabase: () => {



    }

};