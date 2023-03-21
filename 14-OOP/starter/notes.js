/*
    What is Object-Oriented Programming (OOP)?
        • Object-Oriented Programming (OOP) is a programming based on the concept of objects.
        • We use objects to model (describe) real-wordl or abstract features.
        • Objects may contain data (properties) and code (methods). By using objects, we packdata and the 
            corresponding behavior into one block.
        • In OOP, objects are self-contained pieces/blocks of code.
        • Objects are building blocks of applications, and interact with one another.
        • Interactions happen through a public interface (API): methods that the code outside of the object
             can access and use to communicate with the object.

    Classes and Instances (Traditional OOP)
        • You can think of Classes as a blueprint which we can create new objects based on the rules
            described in the class.
        • JavaScript does NOT support real traditional classes.
        • An Instance is an object that we can use in our code that was created from a class.
        • We can create as many instances from a class in our application. Each instance can have different
            data, but they all share the same functionality.
    
    The 4 Fundamental OOP Principles
        How do we actually design classes? How do we model real-world data into classes?

        1. Abstraction
            - Ignoring or hiding details that DON'T matter, allowing us to get an overview perspective of the 
                'thing' we're implementing, instead of messing with details that don't really matter to our implementation.

        2. Encapsulation
            - Keeping properties and methods private inside the class, so they are not accessible from outside the class. 
                Some methods can be exposed as a public interface (API).
            - Prevents external code from accidentally manipulating internal properties/state
            - Allows to change internal implementation without the risk of breaking external code.

        3. Inheritance
            - Making all properties and methods of a certain class available to a child class, forming a hierarchical relationship
                between classes. This allows us to reuse common logic and to model real-world relationships.

        4. Polymorphism
            - A child class can overwrite a method it inherited from a parent class (it's more complex than that, but enough for
                our purposes).
            - Writing a new method with the same name as the one inherited overwrites the inherited method, only in that specific
                child class. 

    OOP in JavaScript: Prototypes
        • 'Classical OOP': Classes
            - Class -> Instance
            - Objects (instances) are 'instantiated' from a class, which functions like a blueprint.

        • OOP in JS: Prototypes
            - Prototype <- Object
            - Objects are linked to a prototype object.
            - Prototypal Inheritance/Delegation: the prototype contains methods (behavior) that are accessible to all objects linked to that prototype.
            - Methods are delegated to the linked prototye object.

            - For Example, using array methods, we are using prototypal inheritance. An array is an prototype object, and the method is inherited.

        • 3 Ways of Implementing Prototypal Inheritance in JavaScript
            How do we actually create prototypes? How do we link objects to prototypes? How can we create new objects, without having classes?

            1. Constructor Functions
                - Technique to create objects from a function.
                - This is how built in objects like Arrays, Maps, or Sets are actually implemented.
                - How OOP has been done in JS since the beginning.

            2. ES6 Classes
                - Modern alternative to constructor function syntax.
                - 'Syntatic Sugar': behind the scenes, ES6 classes work exactly like constructor functions.
                - ES6 classes do NOT behave like classes in 'Classical OOP'.

            3. Object.create()
                - The easiest and most straight-forward  wau of linking an objdect to a portotype object.
                - Not as used as the previous two.
            
            • The 4 pillars of OOP are still valid and important in portotypal inheritance. 
                (Abstraction, Encapsulation, Inheritance, and Polymorphism)
*/
