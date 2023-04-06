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

    What are Promises?
        • An object that is used as a placeholder for the future result of an asynchronous operation.
        • A container for an asynchronous delivered value.
        • A container for a future value (response from AJAX call)

        –– When you buy a lotter ticket, you get a 'promise' that you will receive a prize in the future, IF you get the winning numbers.

        –– Pros of using Promises:
            • We no longer need to rely on events and callbacks passed into asynchronous functions to handle asynchronous results. Events and callback
                functions can sometimes cause unpredictable results.
            • Instead of nesting callbacks, we can 'chain promises' for a sequence of asynchronous operations: escaping callback hell!

    The Promise Lifecycle
        • Pending
            - Before the future value is available (async task is still doing its work in the background)

        • Settled
            - Asynchronous task has finished. There are 2 different states of settled promises (Fulfilled, Rejected)
            - We are able to handle these different states in our code
            - A promise is only settled once, so the state will remain unchanged forever and cannot be changed manually.

            • Fulfilled
                - Success! The value is now available as expected

            • Rejected
                - An error happened. (e.g. the user is offline and cant connect to the API server)

        • Consume a Promise
            - When we already have a promise (e.g. promise returned from Fetch API). In order for a promise to exist, it first must be built.
                Fetch API builds and returns a promise.
            - Sometimes we also need to build a promise and not just consume it.

    Asynchronous Behind the Scenes: The Event Loop
        –– Review of JavaScript Runtime:
            - JS Runtime is basically a container which includes all the pieces necessary to execute JS code. It includes:
            
            - JS Engine: the "heart of the runtime"
                Heap, where objects are stored, and Call Stack where code is executed. JS had only one thread of execution.
            
            - Web APIs 
                DOM, Timers, Fetch API, and all APIs provided to the engine, but not part of the JS language itself.
                Where all asynchronous tasks will run (timers, AJAX calls, and any other async tasks)
            
            - Callback Queue 
                (click, timer, data, etc) Data structure that holds all the erady to be executed callback functions (coming from events)
                
            - Event Loop
                Whenever the call stack is empty, the event loop takes callbacks from the callback queue and puts them into the call stack
                    to be executed. This is the essential piece that makes asynchronous behavior possible in JS. The reason why we can have 
                    non blocking concurrency model (how a language handles multiple things at once) in JS.
        
        •  Great illustration on how the Event Loop and Asynchronous tasks work behind the scenes in video lecture [Asynchronous Behind the Scenes: The Event Loop]
            Too hard to put it into notes. 
            
            Here are the main takeaways:
                - All asychronous tasks are handled in the Web APIs environment, and not the call stack to avoid blocking the rest of the code to run. For example, 
                    loading an img (setting src attribute), or waiting to event listener like 'load' on that image. The event listener will NOT automatically get 
                    placed in the callback queue, it will only get registered along the event in the Web API environment unti the event gets triggered. Only then
                    it will be placed in the callback queue.

                - The event loop will take the first callback in the callback queue only when the callstack is empty, called an event loop tick. JS does not keep
                    track of time, for example, let's suppose we have a 5 second timer (async task) but when the callback gets placed into the callback queue 
                    (after 5 secs), and it is NOT the first one in line. Then the timer will not execute after 5 seconds, it will execute after all other callbacks
                    in front of it are done. If it is the first callback in the queue, then it will run after 5 secs.

                - Callbacks for Promises do NOT go to the callback queue. Instead they have a separate queue called the 'Microtasks Queue' that has priority over
                    the callback queue. The event loop will run ALL tasks in the Microtask Queue, before any callbacks in the Callback Queue.

*/
