Promises are objects that represent the eventual outcome of an asynchronous operation. A Promise object can be in one of three states:

Pending: The initial state— the operation has not completed yet.
Fulfilled: The operation has completed successfully and the promise now has a resolved value. For example, a request’s promise might resolve with a JSON object as its value.
Rejected: The operation has failed and the promise has a reason for the failure. This reason is usually an Error of some kind.
We refer to a promise as settled if it is no longer pending— it is either fulfilled or rejected. Let’s think of a dishwasher as having the states of a promise:

Pending: The dishwasher is running but has not completed the washing cycle.
Fulfilled: The dishwasher has completed the washing cycle and is full of clean dishes.
Rejected: The dishwasher encountered a problem (it didn’t receive soap!) and returns unclean dishes.

If our dishwashing promise is fulfilled, we’ll be able to perform related tasks, such as unloading the clean dishes from the dishwasher. If it’s rejected, we can take alternate steps, such as running it again with soap or washing the dishes by hand.

All promises eventually settle, enabling us to write logic for what to do if the promise fulfills or if it rejects.

##Avoiding common mistakes

1. Nesting promises instead of chaining them
2. Forgetting to return a promise


##promise. ALL
To maximize efficiency we should use concurrency, multiple asynchronous operations happening together. With promises, we can do this with the function Promise.all().

- Promise.all() accepts an array of promises as its argument and returns a single promise. That single promise will settle in one of two ways:

- If every promise in the argument array resolves, the single promise returned from Promise.all() will resolve with an array containing the resolve value from each promise in the argument array.
If any promise from the argument array rejects, the single promise returned from Promise.all() will immediately reject with the reason that promise rejected. This behavior is sometimes referred to as failing fast.


##Review
1 - Promises are JavaScript objects that represent the eventual result of an asynchronous operation.
2 - Promises can be in one of three states: pending, resolved, or rejected.
3 - A promise is settled if it is either resolved or rejected.
4 - We construct a promise by using the new keyword and passing an executor function to the Promise constructor method.
setTimeout() is a Node function which delays the execution of a callback function using the event-loop.
5 - We use .then() with a success handler callback containing the logic for what should happen if a promise resolves.
6 - We use .catch() with a failure handler callback containing the logic for what should happen if a promise rejects.
7 - Promise composition enables us to write complex, asynchronous code that’s still readable. We do this by chaining multiple .then()‘s and .catch()‘s.
8 - To use promise composition correctly, we have to remember to return promises constructed within a .then().
9 - We should chain multiple promises rather than nesting them.
10 - To take advantage of concurrency, we can use Promise.all().
