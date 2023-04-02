/* 
    Synchronous Code
        • Most code is synchronous
        • Synchronous code is executed line by line
        • Each line of code waits for previous line to finish
        • Long-running operations (like 'alert()') block code execution

    Asynchronous Code
        • Asynchronous code is executed after a task that euns in the 'backgroun' finishes
            - setTimeuot() will start the timer in a asynchronous way, meaning the timer will run in the background while
                without preventing the main code from executing.
        • Asynchronous code is non-blocking
        • Execution doesn't wait for an asynchronous task to finish its work
        • Callback functions and Event Listener alone do NOT make code asynchronous
            - Array.map() has a callback but does NOT automatically make code async
            - 'click' event listener is not doing any work in the background, just waiting for click to happen
    
    What are AJAX calls?
        –– AJAX: 
            Asynchronous Javascript And XML: allows us to communicate with remote web servers in an async way. With AJAX calls,
            we can request data from web servers dynamically.
            
        • Client (browser) HTTP requests from Web Server (usually Web API) and the response all happen asynchronously in the 
            background

    What is an API?
        –– API:
            Application Programming Interface: piece of software that can be used by another piece if software, in order to allow
            applications to talk to each other.

        • There are many types of APIs in web development:
            - DOM API, Geolocation API, our own class API, "Online" API, etc.

        • "Online API"
            - application running on a server, that receives requests for data, and sends data back as response.

        • We can build our own web APIs (requires back-end developments, e.g. with node.js) or other 3rd-party APIs

        • APIs used to use the XML data format (as implied in AJAX name), but nowadays JSON data format has replaced XML
            - JSON is basically a JavaScript object but converted to a string
*/
