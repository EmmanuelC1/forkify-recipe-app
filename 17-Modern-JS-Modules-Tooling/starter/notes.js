/* 
    An Overview of Modern Javascript Development
        –– Developement Process
            • We divide our project into mulitple modules that can share data between one another and make out code more organized
                and maintanable.
            • We can inlcude 3rd-Party modules into our code. There are thousands of free open-source modules, which we also call
                packages, that developers share on the NPM repository.
                - For exmaple, the popular Reach Framework or jQuery or even the Leaflet library we used earlier.
                - NPM: Node Package Manager, has established itself as the go to repo for all sorts of packages. Download npm
                    software onour computer through the command line.
                
        –– Build Process
            • This is where one big JavaScript bundle is built, the final file which will deplot to the website (file that is sent to the 
                browser in production).

            • First step: Bundle all modules into one big file
                - Pretty complex process that can eliminate unused code and compress code as well. 
                - This step is important because older browsers don't support modules at all and it's also better for performance to send 
                    less files to the browser. It is alos beneficial that we compress our code.

            • Second Step: Transpiling and Polyfilling
                - Converts all modern JS syntax and features back to old ES5 syntax, so that older browsers can understand our code without 
                    breaking. This is usually done using a tool called 'Babel'.
                -  We use a special tool to implement this build process for us, most commonly 'webpack' and 'Parcel'. These are called JS
                    bundlers, as the name suggests, they take raw code and transform into JS Bundle.
                - webpack is the more popular one, but it can be hard and confusing to set up with the manual configurations required. 
                    Parcel is a zero configuration bundler which works out of the box.

        –– Production
                • Step where the application is being used to real users in the real world.

*/
