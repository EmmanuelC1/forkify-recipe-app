/*
    JavaScript  is a high-level, prototype-based object-oriented, mutli-paradigm, interpreted or just-in-time
        compiled, dynamic single-threaded, garbage-collected programming language with first-class functions 
        and a non-blocking event loop concurrency model. (overcomplicated joking explanation lol).

    • High-Level: any computer program needs resources. In Low-Level languagues, such as C, developers have to
        manage resources manually (allocate memory, etc.) JS & Python are a high-level language where developers do NOT
        have to worry about managing these resources by 'abstraction' (more on abstraction in this section). 
        – Pros: easier to use and learn.
        – Cons: programs will never be as fast or as optimized as a C program, for example.

    • Garbage-Collection: algorithm inside the JS engine that automatically removes all unsued objects from memory
        in order to not clog up with unnecessary stuff.

    • Interepreted or Just-in-time Compiled: important step in every programming language that compiles or interprets
        code to 1's and 0's (machine code) for the computer to read and run your program. (happens inside JS engine).

    • Multi-Paradigm: An approach and mindset of structuring code, which will direct your coding style and technique.
        –– 3 popular paradigms:
            – 1. Procedural Programming     //what we've been doing up to this point.
            – 2. Object-Oriented Programming (OOP)
            – 3. Functional Programming (FP)

    • Protype-Based Object-Oriented: almost everything in JS is an object, except for primitive values, such as numbers, 
        strings, etc. (7 primitive values). However data structures like arrays, are just objects. We create arrays from
        Prototype Blueprints (or templates), and this prototype contains all the array methods we can use by inheritance 
        with the arrays we create in our code. (over-simplification of OOP, more on OOP in this section).

    • First-Class Functions: functions are simply treated as variables. We can pass them into other functions as arguments,
        and return them from functions. Not all languages have First-Class Functions.

    • Dynamically-Typed: no data type defintions. Types become known at runtime. Data type of variables can be 
        automatically changed when we re-assign variables. (TypeScript is basically JS with types).

    • Single-Thread and Non-Blocking Event Loop: complex topics that we will go over later in course, not going into
        specifics here yet. Right now, we are just going to define some things first. (oversimplification)
            –– Concurrency Model: how the JS engine handles multiple tasks happening at the same time.
               – Why do we need that? 
                    JS runs in one single thread, so it can only do one thing at a time.
               – What if there is a long runnning task? (like fetching data from a remote server)
                    Sounds like it would block the single thread. However, we want a non-blocking behavior.
               – How do we achieve that? 
                    By using an 'event loop'. Takes long running tasks, executes them in the background, and puts them 
                    back in the main thread once they are finished.


    What is a JavaScript Engine?
        Program that executes js code. Every browser has its own js engine but the most well known engine is Google's 
        V8 Engine. This engine powers Google Chrome and Node.js

    • Components of a JS Engine and How it Works
        –– Every JS Engine contains a Call Stack and a Heap
            – Call Stack is where our code is executed using something called Execution Context.
            – Heap is an unstructured memory pool which stores every object that our application needs.
        –– How is our code compiled to machine code?
            – Compilation vs Interpretation
                • Compilation: entire code is converted into machine code at once, and written to a binary file that can be 
                    executed by a computer. 
                  Source code ––> (step 1) Compilation ––> Portable File: machine code ––> (step 2) Execution ––> Program Running
                  // step 2 can happen way after compilation

                • Interpretation: interpreter runs through the source code and executes it line by line.
                  Souce code ––> (step 1) Execution Line by Line ––> Program running
                  // code still needs to be converted to machine code

                • Just-in-time (JIT) Compilation: entire code is converted into machine code at once, then executed immediately.
                  Source code ––> (step 1) Compilation ––> Machine code ––> (step 2) Execution ––> Program Running
                  // Machine code NOT a portable file, (step 2) happens immediately after compilation

        –– Modern Just-in-time Compilation of JS
            – As a piece of code enter the JS engine, the first step is to parse (read) the code. During the parsing process, 
                the code is parsed into a data structure called the Abstract Syntax Tree (AST). AST saves meaningful keywords 
                like 'const' and 'function' into the tree in a structured way. This step also checks for syntax errors.
            – Next step is Compilation, which takes the generated AST and compiles it into machine code. (JIT compilation)
            – This machine code gets executed right away (execution happens in Call Stack)
            – JS compiles AST into machine code without worrying about optimization, just to get started with the execution
                process as soon as possible. In the background, the machine code is getting optimized and re-compiled in the
                already running execution multiple times. The new optimized machine code overwrites the previous machine code
                without ever stopping the running execution. This process is what makes modern engines such as V8 so fast.

                // all of this parsing, compilation, execution and optimization happens in a special thread that we can't access
                    from our code.

    • JS Runtime in the Browser
        –– We can think of the JS Runtime as a container that includes all the things that we need to use JS. (in this case in 
            the browser).
            – Inside this container (JS Runtime) we have a JS Engine (Heap and Call Stack)
            – We also need access to the Web APIs (DOM, Timers, Fetch API, etc).
                Web APIs are functionalities provided to the engine, accessible on window object.
            – JS Runtime also includes a Callback Queue.
                – A data structure that contains all the callback functions that are ready to be executed. 
                    (click, timer, data, etc.) ex. Callback function from DOM event listeners.
                – As an event happens (onClick), the callback function will be called.
                    • the callback function is placed in the callback queue.
                    • when the call stack is empty the callback function is then passed to the stack, so that it can be executed.
                    // This happens by something called the event loop.

    • JS Runtime in Node.js 
            –– The Node.js Runtime is really similar as the JS Runtime in the browser.
                – The difference being that no Web APIs are available since those are provided by the browser.
                    Instead we have multiple C++ Bindings and a Thread Pool
    
            
    • How is JS Code Executed in the Call Stack
            –– Let's suppose our code just finished compiling and ready to be executed.
                – A global execution context (for top-level code) is created. 
                    Top-level code being code not in a function. Function body only executed when called. An execution context is 
                    an environment in which a piece of JS is executed. Stores all the necessary information for some code to be 
                    executed. There is exactly ONE global execution context (EC) for top level code.
                – Then top level code actually executes inside global EC. (Computer CPU processes machine code that it received).
                – Next, execution of functions and waiting for callbacks. 
                    For non top level code such as functions, one execution context per fucntion is created. Once all functions 
                    are executed, the engine will keep waiting for callback functions to arrive to be executed. Ex. waiting for 
                    onClick event callback. It is the event loop that provides these new callback function for the call stack.
            
            –– Execution Context in Detail:
                – Variable Environment: 
                    Where all our variables, functions, and a special arguments objects. The argument objects contains all the 
                    arguments that were passed into the function that the current EC belongs to.
                – Scope Chain: 
                    Consists of references to variables that are located outside of the current function. To keep track of the 
                    scope chain, it is stored in each EC.
                – 'this' Keyword:
                    More on 'this' later in this section

                // All of these are generated in the creation phase, right before execution.
                // EC's belonging to Arrow Functions do not contain argument objects or the 'this' keyword. Instead they can use
                    the arguments object and 'this' from their closest regular function parent. (more on this later).

            –– The Call Stack
                – Place where execution contexts (EC) get stacked on top of each other, to keep track of where we are in the execution.

    Scope and Scope Chain
        • Scoping: how our program's variables are organized and accessed. 
        • Lexical Scoping: scoping is controlled by placement of functions and blocks in the code.
        • Scope: space environment in which a certain variable is declared. There is global scope, function scope and block scope.
        • Scope of a Variable: region of our code where a certain variable can be accessed.

            –– Global Scope: 
                - outside of any function or block
                – variables declared in global scope are accessible everywhere
            –– Function Scope: 
                - variables are accessible only inside function, NOT outside
                - Also called local scope
            –– Block Scope (ES6)
                - variables are accessible only inside block (block scoped)
                - however, this only applies to 'let' and 'const' variables. If variable is declared using 'var', then it can be 
                    accessed outside the block (if/else, for loop, etc)
                - functions are also block scoped (only in 'strict' mode)
    
    Hoisting and The TDZ (Temporal Dead Zone):
        • Hoisting: makes some types of variables accessible/usable in the code before they are actually declared. "Variables 
            lifted to the top of their scope". Before execution (during creating phase), code is scanned for variable declarations,
            and for each variable, a new property is called in the variable environment object.

            –– Function Declarations: 
                - Hoisted? Yes
                - Intial Value: actual function
                – Scope: block

            –– var Variables:
                - Hoisted? Yes
                - Intial Value: undefined
                – Scope: function

            –– let, const Variables:
                - Hoisted? No       //technically yes, but not in practice
                - Intial Value: <uninitialized>, TDZ (Temporal Dead Zone)
                – Scope: block

            –– Function Expression & Arrow Functions:
                - Depends if using var or let/const
                - These functions are simply variables, so they behave the same wat as variables in regard to hoisting.
                    Arrow function created with var is hoisted to undefined, but one created with let or const is not usable
                    before it is declared in code because of the Temporal Dead Zone.
        
        • TDZ: Temporal Dead Zone
            //focusing on the 'job' variable in line 187. TDZ for 'job' is lines 183-185  
        
            const myName = 'Emmanuel';

            if(myName === 'Emmanuel) {
                console.log(`Emmanuel is a ${job}); //ReferenceError: Cannot access 'job' before initialization //TDZ for 'job'
                const age = 2023 - 1997; //TDZ for 'job'
                console.log(age); //TDZ for 'job'

                const job =  'developer';
                console.log(x); //ReferenceError: x is not defined
            }

            –– Why do we need TDZ?
                - Makes it easier to avoid and catch errors: accessing variables before decalration is bad  practive and should
                    be avoided.
                – Make const variables actually work. const should never be re-assigned. Cannot set const variable to undefined
                    first and then re-assign them to the actual value when we declare them.

            –– Why Does Hoisting Exist?
                - Using functions before actual declarations (function declarations).
                – var hoisting is just a byproduct of hoisting function declarations.

    'this' Keyword:
        • Special variable that is created for every execution context (every function). Takes the value of (points to) the 
            'owner' of the function in which the 'this' keyword is used.
        • 'this' is NOT static. It depends on how the function is called, and its value is only assigned when the function 
            is actually called.

            –– Method: 
                - this = <Object that is calling the method>

            –– Simple Function Call:
                - this = undefined               //in strict mode
                - this = global window object   //not in strict mode

            –– Arrow Functions:
                - this = <this of surrounding function (lexical this)>
                - arrow functions don't get their own this keyword

            –– Event Listener:
                - this = <DOM element that the handler is attached to>

            –– new, call, apply, bind Methods:
                - covered later in this course...

        • 'this' does NOT point to the function itself or its variable environment.

    Primitives vs Objects:
        • Primitives (primitive types):
            –– Stored in the Call Stack (stored in the EC in which they are declared)
                - Number
                - String
                – Boolean
                – Undefined
                – Null
                – Symbol
                – BigInt
        
        • Objects (reference types):
            –– Stored in the Heap
                - Object Literal
                - Arrays
                - Functions
                – Many more...

*/
