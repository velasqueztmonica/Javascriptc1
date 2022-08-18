const {shopForBeans, soakTheBeans, cookTheBeans} = require('./library3.js');

// Write your code below:
async function makeBeans() {

    let beanType = await shopForBeans();
    let isSoft = await soakTheBeans(beanType);
    let dinnerReady = await cookTheBeans(isSoft);
    console.log(dinnerReady);
  }
  
  makeBeans();