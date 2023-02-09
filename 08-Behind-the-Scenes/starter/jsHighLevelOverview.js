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

    • Multi-Paradigm: An approach and midset of structuring code, which will direct your codeing style and technique.
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

    • Dynamically-Typed: no data type defintions. Types become known at runtime. Data type of variable can be 
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
        Program that executes js code. Very browser has its own js engine but the most well known engine is Google's 
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
                like 'const' and 'function' into the tree in a srtuctured way. This step also checks for syntax errors.
            – Next step is Compilation, which takes the generated AST and compiles it into machine code. (JIT compilation)
            – This machine code gets executed right away (execution happens in Call Stack)
            – JS compiles AST into machine code without worrying about optimization, just to get started with the execution
                process as soon as possible. In the background, the machine code is getting optimized and re-compiled in the
                already running execution multiple times. The new optimized machine code overwrites the previous machine code
                without ever stopping the running execution. This process is what makes modern engines such as V8 so fast.

                // all of this parsing, compilation, execution and optimization happens in a special thread that we can't access
                // from our code.

    • JS Runtime in the Browser
        –– We can think of the JS Runtime as a container that includes all the things that we need to use JS. (in this case in 
            the browser).
            – Inside this container (JS Runtime) we have a JS Engine (Heap and Call Stack)

*/
