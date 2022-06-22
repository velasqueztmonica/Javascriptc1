/* High Order Functions
functions that accept other functions as arguments and/or return functions as output. 
This enables us to build abstractions on other abstractions, just like “We hosted a birthday party” 
is an abstraction that may build on the abstraction “We made a cake.”
*/

//Exercise 1

const checkThatTwoPlusTwoEqualsFourAMillionTimes1 = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};

// Write your code below
const isTwoPlusTwo1 = checkThatTwoPlusTwoEqualsFourAMillionTimes1;
isTwoPlusTwo1();
console.log(isTwoPlusTwo1.name);

//Exercise 2
/*
 A higher-order function is a function that either accepts functions as parameters, 
 returns a function, or both! We call functions that get passed in as parameters callback functions. 
 Callback functions get invoked during the execution of the higher-order function.
*/

const addTwo1 = num => {
  return num + 2;
}

const checkConsistentOutput1 = (func, val) => { //checks the work of addTwo1
  let checkA = val + 2;
  let checkB = func(val);
  return checkA == checkB ? func(val) : "inconsistent results"
}

console.log(checkConsistentOutput1(addTwo1,3))


//Exercise 3
const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    for(let i = 1; i <= 1000000; i++) {
      if ( (2 + 2) != 4) {
        console.log('Something has gone very wrong :( ');
      }
    }
  };
  
  const addTwo = num => num + 2; //function that adds two irrespective of the parameter passed
  
  const timeFuncRuntime = funcParameter => {
    let t1 = Date.now();
    funcParameter();
    let t2 = Date.now();
    return t2 - t1;
  };
  
  // Write your code below
  
const time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes);
console.log(time2p2)

const checkConsistentOutput = (functionE, value) => {
    let check1 = functionE(value);
    let check2 = functionE(value)
  
    if (check1 === check2) {
      return check1;
    } else {
      return 'This function returned inconsistent results'
    }
  
  }
  checkConsistentOutput (addTwo, 3)
  console.log(checkConsistentOutput (addTwo, 3))