// Add key value pairs to javascript objects

//Exercise 1
/*A foods object has been created with three entries. 
Using the syntax of your choice, add three more entries to it: 
bananas with a value of 13, grapes with a value of 35, and strawberries with a value of 27.*/

let foods = {
    apples: 25,
    oranges: 32,
    plums: 28
  };
  
  // Only change code below this line
foods.bananas = 13;
foods.grapes = 35;
foods.strawberries = 27;
  // Only change code above this line
  
console.log(foods);
  
let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
      totalUsers: 51,
      online: 42
    }
  };
  
  // Only change code below this line
userActivity.data.online = 45;
  // Only change code above this line
  
console.log(userActivity);
  
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  
  function checkInventory(scannedItem) {
    // Only change code below this line
    return foods[scannedItem]
    // Only change code above this line
  }
  
  console.log(checkInventory("apples"));


  let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  
  // Only change code below this line
delete foods.oranges;
delete foods.plums;
delete foods.strawberries;
  // Only change code above this line
  
console.log(foods);
  
//Finish writing the function so that it returns true if the object passed to it contains all four names, 
//Alan, Jeff, Sarah and Ryan and returns false otherwise.

let usersExample = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function isEveryoneHere(userObj) {
    if (
      userObj.hasOwnProperty("Alan") &&
      userObj.hasOwnProperty("Jeff") &&
      userObj.hasOwnProperty("Sarah") &&
      userObj.hasOwnProperty("Ryan")
    ) {
      return true;
    }
    return false;
  }
  
console.log(isEveryoneHere(users));
  

const users = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
  }
  
  function countOnline(usersObj) {
    // Only change code below this line
      let result = 0;
        for (let user in usersObj) {
          if (usersObj[user].online === true) {
              result++;
          }
        }
      return result;
    // Only change code above this line
  }
  
console.log(countOnline(users));
  
let user = {
    name: 'Kenneth',
    age: 28,
    data: {
      username: 'kennethCodesAllDay',
      joinDate: 'March 26, 2016',
      organization: 'freeCodeCamp',
      friends: [
        'Sam',
        'Kira',
        'Tomo'
      ],
      location: {
        city: 'San Francisco',
        state: 'CA',
        country: 'USA'
      }
    }
  };
  
  function addFriend(userObj, friend) {
    // Only change code below this line
      userObj.data.friends.push(friend);
      return userObj.data.friends;
    // Only change code above this line
  }
  
console.log(addFriend(user, 'Pete'));
  
//Defining a function
const temConv = celsius => {
    let fahre = (celsius * (9 / 5)) + 32
    return fahre;
}

console.log(temConv(30))

//Reverse a string
const reverString = string => {
    return string.split('').reverse().join('');
}
reverString('hello')

//factorilise number

function factorialize(num) {
    if (num < 0) 
          return -1;
    else if (num == 0) 
        return 1;
    else {
        return (num * factorialize(num - 1));
    }
}
  
//Find longest word

const findLongest = string => {
    let stringArr = string.split(' ');
    let longestWord = '';
    for (let i = 0; i < stringArr.length; i++) {
        if (stringArr[i] >= longestWord) {
            longestWord = stringArr[i]
            
        }
        return longestWord.length;
    }
}

console.log(findLongest('Hello Monica Maria Velasquez Torres you are beautiful'))

//Arrays and Objects
function animal(obj){
    return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
}
  
const animalObject = obj => {
    return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
}