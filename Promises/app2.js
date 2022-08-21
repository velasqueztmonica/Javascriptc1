console.log("This is the first line of code in app.js.");
// Keep the line above as the first line of code
// Write your code here:
const usingSTO = () => {
    console.log('This is Monica speaking');
};
//The following function will use a 3000 delayed before printing / executing what the function usingSTO is doing. 
//It will be included into the code after 3000ms
setTimeout(usingSTO, 3000)


// Keep the line below as the last line of code:
console.log("This is the last line of code in app.js.");

/*Consuming Promises:

-> Initial state of asynchronous is PENDING
-> Promise objects come with a '.then()' method meaning that the promise executes something when is done, then it will proceed to an action
-> .then() : higher order function which takes two callbacks as arguments aka 'handlers' 
    1. Handler 1 - onFulfilled: success handlers which contains the logic the promise is resolving
    2. Handler 2 - onRejected: failure handlers, contain the logic for the promise rejecting

! Possible to invoke the .then() method with one, two or none arguments

*/