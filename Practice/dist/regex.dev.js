"use strict";

var username = "JackOfAllTrades";
var userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; // Change this line

var result = userCheck.test(username);
/*
1. ^ - start of input
2. [a-z] - first character is a letter
3. [a-z]+ - following characters are letters
4. \d*$ - input ends with 0 or more digits
5. | - or
6. ^[a-z] - first character is a letter
7. \d\d+ - following characters are 2 or more digits
8. $ - end of input
*/

var array = ['I', 'am', 'feeling', 'really', 'happy'];
var newArray = array.splice(3, 2);
console.log(newArray);
var array2 = ['today', 'was', 'not', 'so', 'great'];
var array3 = array2.splice(2, 2);
console.log(array3);
console.log(array2);