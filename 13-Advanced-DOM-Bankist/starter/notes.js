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
*/
