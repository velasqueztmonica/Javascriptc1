const {checkInventory, processPayment, shipOrder} = require('./library2.js');

const order = {
  items: [['sunglasses', 1], ['bags', 2]],
  giftcardBalance: 79.82
};

checkInventory(order) //first promise
.then((resolvedValueArray) => {
  // Write the correct return statement here:
    return processPayment(resolvedValueArray)
})
.then((resolvedValueArray) => {
  // Write the correct return statement here:
    return shipOrder(resolvedValueArray)
})
.then((successMessage) => {
  console.log(successMessage);
})
.catch((errorMessage) => {
  console.log(errorMessage);
});
