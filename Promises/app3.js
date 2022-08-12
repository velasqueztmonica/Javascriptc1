/*
Success and Failure Callback Functions



*/

const { checkInventory } = require ('./library.js');

const order = [['sunglasses', 1], ['bags', 2]];

// Write your code below:

//Snippet for a handleSuccess
const handleSuccess = (resolvedValue) => {
    console.log(resolvedValue);
}
//Snippet for a handleFailure
const handleFailure = (rejectionReason) => {
    console.log(rejectionReason);
}

//Calling the checkinventory functions
checkInventory(order)
                    .then(handleSuccess)
                    .catch(handleFailure)

checkInventory(order).then(handleSuccess, handleFailure)