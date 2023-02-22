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

            –– Function thay retursn a new function:
                function count() {
                    let counter = 0;
                    return function() {
                        counter++;
                    };
                }

                // Higher-order function: count()
                // Returned function: (anonymous function inside)


*/
