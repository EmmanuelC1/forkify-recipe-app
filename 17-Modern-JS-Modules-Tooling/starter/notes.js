/* 
    Overview of Modern JavaScript Development
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


    Overview of Modules in JavaScript
        –– Modules
            • A module is a reusable piece of code that encapsulates implementaion details. Usually a standalone file, but it doesn't have to be.
            • A module can also have imports and exports. We can export values or functions to the public API. We can impirt values from other 
                modules, and these other modules are called dependencies of the importing module.
        
        –– Why Modules?
            • Compose Software: modules are small building blocks that we out together to build complex applications.
            • Isolate Components: modules can be developed in isolation without thinking about the entire codebase.
            • Abstract Code: implement low-level code in modules and import these abstractions into other modules.
            • Organized Code: modules naturally lead to more organized codebase.
            • Reuse Code: modules allow us to easily reuse the same code, even across multiple projects.

        –– Native JavaScript (ES6) Modules
            • ES6 Modules are modules stored in files, exactly one module per file.

            • ES6 Modules vs Scripts   

                                    ES6 Modules             vs              Scripts
            Top-level variables     Scoped to module                        Global
            Default mode            Strict mode                             "Sloppy" mode
            Top-level 'this'        undefined                               window
            Imports and Exports     YES (need to happen at top-level        NO
                                    imports are hoisted)
            HTML Linking            <script type="module">                  <script>
            File Downloading        Asynchronous                            Synchronous (unless we use async or defer attributes in script tag)

        –– How ES6 Modules Are Imported
            • During the parsing process (reading code without executing), imports are hoisted. The whole process of importing modules happens
                before the code in the main module is actually executed.

            • Importing Modules before execution
                - Modules are imported synchronously
                - Possible thanks to top-level ('static') imports, which make imports known before execution
                - This makes 'bundling' and 'dead code elimination' possible

            • After the Parsing process has figured out which modules it needs to import, these modules are actually downloaded from the server
                asynchronously. It is only the importing operation itself that happends synchronously.

            • After the module arrives, it's also parsed and the module exports from the exporting module are linked to the imports in the 
                importing file. Exported values/functions are not copied to imports, they are live connections (just a reference to the export).
                Any change in the exporting module also happends in the importing module (unique to ES6 modules)

            • The code in the imported modules is then executed, and the process of importing modules is finally finished.
            • After this process, the importing file/module can finally be excuted as well (e.g. index.js).




*/
