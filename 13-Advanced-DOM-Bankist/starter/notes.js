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
*/
