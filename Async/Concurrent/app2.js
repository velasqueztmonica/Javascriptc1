let {cookBeans, steamBroccoli, cookRice, bakeChicken} = require('./library2.js');
/*

async function asyncPromAll() {
  const resultArray = await Promise.all([asyncTask1(), asyncTask2(), asyncTask3(), asyncTask4()]);
  for (let i = 0; i<resultArray.length; i++){
    console.log(resultArray[i]); 
  }
}
In our above example, we await the resolution of a Promise.all(). 
This Promise.all() was invoked with an argument array containing four promises (returned from required-in functions). 
Next, we loop through our resultArray, and log each item to the console. 
The first element in resultArray is the resolved value of the asyncTask1() promise, 
the second is the value of the asyncTask2() promise, and so on.

Promise.all() allows us to take advantage of asynchronicity— each of the four asynchronous tasks can process concurrently. 
Promise.all() also has the benefit of failing fast, meaning it won’t wait for the rest of the asynchronous actions to complete 
once any one has rejected. As soon as the first promise in the array rejects, the promise returned from Promise.all() 
will reject with that reason. As it was when working with native promises, Promise.all() is a good choice if multiple asynchronous 
tasks are all required, but none must wait for any other before executing

*/
// Write your code below:


async function serveDinnerAgain(){
  let foodArray = await Promise.all([steamBroccoli(), cookRice(), bakeChicken(), cookBeans()]); 
  
  console.log(`Dinner is served. We're having ${foodArray[0]}, ${foodArray[1]}, ${foodArray[2]}, and ${foodArray[3]}.`);
}

serveDinnerAgain();

