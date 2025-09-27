self.addEventListener('backgroundfetchsuccess', e => {

    e.waitUntil(async function () {

        const records = await e.registration.matchAll();

        for (const record of records) {

            const response = await record.responseReady;
            const blob = await response.blob();
            console.log(`Downloaded ${record.request.url}`, blob);

            // Cache?
            console.log(blob);

        }

        await e.updateUI({ title: 'Download complete!' });

    }());
});

self.addEventListener('backgroundfetchfail', e => {
    console.log(`Background fetch has failed. Error: ${e}`);
});

self.addEventListener('backgroundfetchabort', e => {
    console.log(`Background fetch was aborted. Error: ${e}`);
});