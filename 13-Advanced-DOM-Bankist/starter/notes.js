/*
    What is the DOM?
        • The interface between JavaScript code and the browser
        • Allows us to make JavaScript interact with the browser
        • We can write JavaScript to create, modify and delete HTML elements. Set styles, classes and attributes; and
            listen and respond to events.
        • DOM tree is generated from an HTML document, which we can then interact with.
        • DOM is a very complex API that contains lots of methods and properties to interact with the DOM tree.
            - querySelector()
            - addEventListener()
            - createElement()
            - innerHTML
            - .textContent
            - .children
            - etc...
    
    How the DOM API is Organized Behind the Scenes
        • Every single node in the DOM Tree is of the type, Node. Each node is represented in JavaScript by an object.
            This object gets access to special node methods and properties such as textContent, childNode, parentNode, etc..

        • These nodes have different types:
            –– Element
                - HTMLButtonElement
                - HTMLDivElement
                - etc...
            –– Text (paragraph tag <p>)
            –– Comment (<!-- Comment -->)
            –– Document
                - contains important methods such as querySelector(), createElement(), getElementByID()
            –– EventTarget
                • Parent node of Node Type and Windoe node type
                - contains addEventListener() and removeEventListener(), so all child nodes (every single type of node since this
                    is the top node) can use these methods by inheritance

        • Inheritance of Methods and Properties
            –– All child types will have access to the methods and properties of all their parent node types.
            –– ex. Any HTMLElement will have access to .addEventListener(), .cloneNode(), or .closest() methods.

    Event Propagation: Bubbling and Capturing
        • When an event happens (let's say a click event), that event does not get created on the target element. Instead, it is created at
            the root of the document (very top of the DOM tree).

        • From there the 'CAPTURING PHASE' happens, where the event travels down from the document root to the target element. As the event
            travels down the tree it will pass through every single parent element of the target element.

        • As soon as the event reaches the target element the 'TARGET PHASE' happens, where events can be handles right at the target. We handle 
            these events with event listeners (.addEventListener). They wait for a certain event to happen on a certain element, and as soon as
            the event occurs, it runs the attached callback function.

        • After reaching the target, the event travels all the way back up the DOM tree to the document root, this is called the 'BUBBLING PHASE'.
            We say that events bubble up from the target to the document root. Just like the Capturing Phase, the event passes through all its
            parent elements. As the event bubbles through its parent elements, it's as if the event had happened right in each element.

            –– By deafult, events can only be handled in the target and in the Bubbling Phase, however we can set up event listeners in a way that
                they listen to events in the Capturing Phase instead.
            –– Not all type of events have a Capturing and Bubbling Phase. Some are created right on the target element, so we can only handle 
                them there.
            –– Events propagate, which is really what capturing and bubbling is. Events progate from one place to another.

    Efficient Script Loading: defer and async
    Different ways to add script tag to HTML –– provides different ways the JS file is fetched (downloaded and executed)

        • Regular Way: <script src="script.js"></script>
            –– Scipt tag in HEAD 
                - Parsing HTML will begin, then script tag will trigger for the JS to be fetched and executed (at this moment, HTML parsing is paused).
                When JS is done fetching and executing, then the HTML will finish its parsing and DOMContentLoaded event will be triggered.
                - The script will be executed before the DOM is ready, which is NOT IDEAL.

            –– Script tag in end of BODY
                - HTML begins to parse, once it fully finishes, the JS file is fetched and executed. Then the DOMContentLoaded event will be triggered.
                - This is much better, but not perfect.

        • Async: <script async src="script.js"></script>
            –– Script tag in HEAD
            - In an asynchronous way, the HTML starts to parse with the script being fetched. The HTML then pauses and waits for the JS to execute.
              Once JS is executed, the HTML finishes its parsing and DOMContentLoaded is triggered.
            - This makes page loading times shorter

            –– Script tag in end of BODY
            - Does not make sense here 🤷🏻‍♂️ because fetching and executing the script always happens after parsing the HTML anyways. So the Async
              attribute does not have any practical effect here at all. 

        • Defer: <script defer src="script.js"></script>
            –– Scipt tag in HEAD
            - The HTML parsing and JS fetching is loaded asynchronously, but the execution of JS is deferred. Meaning that the execution comes after
              the HTML and JS is done parsing and fetching respectively.
            - Loading time is similar to Async (head), but with the difference of JS execution being deferred until the end, so HTML parsing is never 
              interrupted. Many times, this is exactly what we want!

            –– Script tag in end of BODY
            - Does not make sense here 🤷🏻‍♂️ because fetching and executing the script always happens after parsing the HTML anyways. So the Defer
              attribute does not have any practical effect here at all.

    Regular vs Async vs Defer
        • Regular (end of Body)
            | Parsing HTML | Fetch | Run | DOMContentLoaded 

        - Scripts are fetched and executed 'after the HTML is completely parsed'.
        - Use if you need to support old browsers.

        • Async (in Head)
            | Parse HTML | Wait | Parse HTML | DOMContentLoaded 
                |  Fetch   | Run  | 

        - Scripts are fetched 'asynchronously' and executed 'immediately'.
        - Usually the DOMContentLoaded event waits for ALL scripts to execute, except for async scripts. So, DOMContentLoaded does NOT wait
            for an async script. Usually happens when a big script takes a long time to load.
                | Parse HTML |     |  DOMContentLoaded 
                |     Fetch           | Run | 
            // Fetch takes too long to load and DOMContentLoaded happends after HTML parse is done, but JS is not done fetching

        - async scripts are NOT guaranteed to execute in order that they are declared
        - Use for 3rd party scripts where order does NOT matter (e.g. Google Analytics)

        • Defer (in Head)
            | Parse HTML | Run | DOMContentLoaded
                | Fetch |

        - Scripts are fetched 'asynchronously and executed 'after the HTML is completely parsed'.
        - DOMCOntentLoaded event fires AFTER defer script is executed
            |     Parse HTML        |        |  DOMContentLoaded 
            |         Fetch            | Run | 
        // DOMContentLoaded is forced to be triggered only after the script is downloaded and executed

        - async scripts are executed IN ORDER. (usually what we want)
        - This is overall the best solution! Use for own scripts, and when order matters (e.g. including a library)

    Conclusion: Using 'defer' in the HTML Head for scripts is overall the BEST solution.
*/
