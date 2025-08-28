Demo.PageVisibility = window.Demo.PageVisibility || {

    //
    // Demo 1: monitor for visibility changes and log them
    // 

    init: () => {

        Demo.clear();

        document.addEventListener("visibilitychange", () => {

            // Log to console
            Demo.log(`Page visibility: ${document.visibilityState}`);

            // Update document title
            document.title = (document.hidden) ? "I'm hidden for now..." : "Peek-a-boo!" ;

            // TODO: MAYBE: set up a notification to be sent when page is hidden

            // TODO: MAYBE: change colors of page/design while tab is hidden

        });

    }

};

(function () {

    Demo.PageVisibility.init();

})();