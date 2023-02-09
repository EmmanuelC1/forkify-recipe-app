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
                    By using an 'event loop'. Takes long running tasks, executes them in the background, and puts them back
                    in the main thread once they are finished.
*/
