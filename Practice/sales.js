
  
const saleHotdogs = numSale => {
    return numSale < 5 ? numSale * 100 : (numSale>=5 && numSale<10)? numSale * 95: numSale * 90
}

console.log(saleHotdogs(9))

