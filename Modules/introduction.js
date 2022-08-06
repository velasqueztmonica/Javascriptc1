/*

The answer is that you are executing this code in the browser’s runtime environment. 
The window.alert() method is built into this environment and any program executed in a browser has access to this method. 
In fact, the window object provides access to a huge amount of data and functionality relating to the open browser window beyond just .alert().

*/

/* A runtime environment is where the program will be executed. 

    1 - browser's runtime environment
    2 - Node runtime environment

--> Front end JS applications executed in [1] and have access to the window object
--> Back-end JS applications executed in [2] and have access to the file system, databases, and networks attached to the server

*/