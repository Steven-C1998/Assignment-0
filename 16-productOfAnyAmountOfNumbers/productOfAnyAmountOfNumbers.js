function productOfAnyAmountOfNumbers(...args) {
  // Insert code here;
  let product = arguments[0];
  for (let i = 1; i < arguments.length;i++){
    product *= arguments[i];
  }

  return product;
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;