function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
  let union = arguments[0];
  for (let i = 1; i < arguments.length;i++){
    union = new Set([...union,...arguments[i]]);
  }  
  return union;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;