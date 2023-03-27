/*  
    How to Plan a Web Project
        –– Project Planning
            1. User Stories
                - Description of the application's functionality from the user's perspective. All user stories put together
                    describe the entire application.
                - Common Format: 'As a [type of user (Who?)], I want [an action (What?)] so that [a benefit (Why?)].
            
            2. Features
                - Exact features that we need to implement in order to make the user stories actually work as intended.
                
            3. Flow Chart
                - WHAT we will build
                - Visualize the different actions that a user can take, and how the program reacts to these actions.

            4. Architecture
                - HOW we will build it
                - How we will organize our code, and what JS features we will use. Gives us a structure in whihc we can then 
                    develop the application's functionality.

            5. Development
                - Implementation of our plan using code

    Mapty Project Planning
        1. User Stories 
            • As a user, I want to log my runnning workputs with location, distance, time, pace, and steps/minute, so that I can keep
                a log of all my running.
            • As a user, I want to log my cycling workouts with location, distance, time, speed, and elevation gain, so that I can keep
                a log of all my cycling.
            • As a user, I want to see all my workouts at a glance, so I can easily track my progress over time.
            • As a user, I want to also see my workouts on a map, so I can easily check where I work out the most.
            • As a user, I want to see all my workouts when I leave the app and come back later, so that I can keep using the app over time.

        2. Features
            • Map where a user clicks to add new workout (best way to get location coordinates)
                - Geolocation to display map at current location (more user friendly)
                - Form to input distance, time, pace, steps/minute
            • Form to input distance, time, speed, elevation gain
            • Display all workouts in a list
            • Display all workouts on a map
            • Store workout data in the browser using local storage API

        3. Flow Chart 
            • Flow chart visualization in file system (Mapty-flowchart.png)

        4. Architecture
            • Architecture visualization in file system (Mapty-architecture-final.png)
*/
