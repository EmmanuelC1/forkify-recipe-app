/*
    First-Class vs Higher-Order Functions
        • First-Class Functions:
            - JavaScript treats functions as FIRST-CLASS CITIZENS
            - This means that functions are SIMPLY VALUES
            - Functions are just another 'TYPE' OF OBJECT
            - First-class functions are just a concept, simply just a feature that makes functions = values.
                (There are no first-class functions in practice)

            –– Store functions in variables or properties:
                const add = (a, b) => a + b; // function values: '(a, b) => a + b;'

                const counter = {
                    value: 23,
                    inc: function() {this.value++;}, // function values: 'function() {this.value++;},'
                }

            –– Pass functions as arguments to OTHER functions:
                const greet = () => console.log('Hey Emmanuel');
                btnClose.addEventListener('click', greet) // passing 'greet' function into another function (event listener)
            
            –– Return functions FROM functions:

            –– Call methods on functions:
                counter.inc.bind(someOtherObject); // calling 'bind()' method on function 'inc' from counter object (above)

        • Higher-Order Functions
            - A function that RECEIVES another function as an argumetn, that RETURNS a new function, or BOTH.
            - This is only possible because of first-class functions
            - There are higher-order functions in practice, possible through language supporting first-class functions.

            –– Function that receives another function:
                const greet = () => console.log('Hey Emmanuel');
                btnClose.addEventListener('click', greet); 

                // Higher-order function: addEventListener
                // Callback function: greet, usually the function that gets passed in

            –– Function that returns a new function:
                function count() {
                    let counter = 0;
                    return function() {
                        counter++;
                    };
                }

                // Higher-order function: count()
                // Returned function: (anonymous function inside)


    Closures
        • A closure makes a function remember all the variables that existed at the function's birthplace
            - closure makes 'booker()' remember 'passengerCount' inside 'secureBooking()' from script.js starting 
                at line 263

        • Any function always has access to the variable enviroment (VE) of the execution context (EC) in which the function
            was created. Even after that EC is gone.
            - 'booker()' was created in 'secureBooking()' execution context (EC), so therefore, the 'booker()' function
                will get access to this variable environment (VE) which contains 'passengerCount'

        • The connection that allows 'booker()' to access 'secureBooking()' VE is called Closure.
            - Closure: VE attached to the function, exactly as it was at the time and place the function was created.
            - A closure makes sure that a function doesn't lose connection to variables that existed at the function's
                birthplace.

        • When 'booker()' gets called, JS will see that 'passengerCount' is not in its VE and then look inside the Closure
            before trying the scopr chain. (Closure gets priority over scope chain)
                - This ensure that 'booker()' uses the right 'passengerCount' in the case that there is another variable
                    named the same in the global scope.
        
        –– We do NOT create closures manually. JS does this completely automatically. We can't even access closed-over 
            variables explicitly. A closure is NOT a tangible JS object.
*/
