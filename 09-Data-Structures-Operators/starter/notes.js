/*
    Which Data Sturcture to Use
        • 3 Sources of Data
            - From the Program Itself:
                data written directly in source code (status messages).
            - From the UI:
                data input from the user or written in DOM (tasks in todo app)
            - From External Sources:
                data fetched for example from web API (recipe objects (json))
        
        • Simple list of values?
            - array or set
        • Need key value pairs?
            - object or map

    Arrays vs Sets
        • Arrays
            – when you need ORDERED list of values (might contain duplicates)
            - when you need to MANIPULATE data (a lot of useful array methods)
        • Sets
            - when you need to work with UNIQUE values
            - when HIGH-PERFORMANCE is really important (search and delete is faster than array)
            - to REMOVE DUPLICATES  from arrays

    Objects vs Maps
        • Objects
            - more 'traditional' key/value store ('abused' object)
            - easier to write and access values with . and []

            - use when you need to include FUNCTIONS (methods)
            - use when working with JSON (can convert to map)

        • Maps
            - better PERFORMANCE
            - keys can have ANY data type
            - easy to iterate
            - easy to compute size

            - use when you simply need to map key to values
            - use when you need keys that are NOT strings

*/
