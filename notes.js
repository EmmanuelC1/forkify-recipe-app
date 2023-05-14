/* 
    The MVC Architecture    
        –– Why Worry About Architeture?
            • Structure
                - Like a house, software needs a structure: the way we organize code
            • Maintainability
                - A project is never done! We need to be able to easily change it in the future
            • Expandability
                - We also need to be able to easily add new features
            • The perfect architecture
                - The perfect architecure would have all those 3 aspects: Structure, Maintainability, and Expandability.
                - We can create our own architecture, as we did on the Mapty project) but that only works on small projects.
                - For more complex projects, we can use well-established architectures pattern like MVC, MVP, Flux, etc.
                - We can use a framework like React, Angular, Vue, Svelte, etc.

        –– Components of Any Architecture
            • Business Logic
                - Code that solves the actual business problem
                - Directly related to what the business does and what it needs
                - Example: sending messages, storing transactions, calculating taxes, etc.
            • State
                - Essentially stores all the data about the application (fetched data from API, user input data, what page user is currently viewing, etc)
                - Should be the 'single source of truth'
                - UI should be kept in sync with the state. So if any data changes in the state, the UI should reflect that and vice versa.
                - State libraries exist like Redux and MobX
            • HTTP Library
                - Responsible for maing and receiving AJAX requests
                - Optional but almost always necessary in real-word apps
            • Application Logic (Router)
                - Code that is only concerned about the implementation of application itself.
                - Handles navigation and UI events
            • Presentation Logic (UI Layer)
                - Code that is concerned abou the visible part of the application
                - Essentially displays application state

        –– The Model-View-Controller (MVC) Architecture
            • Model
                - Usually contains Business Logic and State.
                - Also contains the HTTP Library, where the app might get data from an API or some backend
            • View
                - Presentation Logic where the application interacts with the user
            • Controller
                - Contains the Application Logic, and sits between the Model and View.
                - It basically creates a bridge between the Model and View which should know nothing about each other 
                - Handles UI events and dispatches tasks to Model and View

            • Flow of Actions and Data (event like a 'click' happens on the UI)
                1. Click event happends on UI
                2. Controller will handle this event (application logic). This event might involve handling updating the UI and also ask th Model for some data.
                3. Asking the Model for some data, might involve doing an AJAX request to the Web.
                4. When the data arrives, the Controller takes the data and sends it to the View
                5. The View will render that data to the UI

    
    Event Handling in MVC: Publisher-Subscriber Design Pattern
        • Event should be handled in the controller (otherwise we would have application logic in the view)
        • Events should be listened for in the view (otherwise we would need DOM elements in the controller)
        
        • Publisher: code that know WHEN to react
        • Subscriber: code that WANTS to react
        • Subscribe to publisher by passing in the subscriber function

        • 'controlRecipes' (controller.js) will be passed into 'addHandlerRender' (recipeView.js) when program starts
        • 'addHandlerRender' listens for events (addEventListener), and uses 'controlRecipes' as callback

        • When the program starts, the init() function in the controller calls 'addHandlerRender()' in the View (possible because controller imports both
            the model and the view) and passes 'conntrolRecipes()' (from the controller) as an argument.
        • The 'addHandlerRender()' function listens to events (addEventListener) and uses the passed in 'controlRecipes()' function as the callback
*/
