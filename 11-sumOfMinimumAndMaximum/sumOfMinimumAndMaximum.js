function sumOfMinimumAndMaximum(nums) {
  // Insert code here;
  function max(array){
    return Math.max.apply(null, array); //finds max
  }
  function min(array){
    return Math.min.apply(null, array); //finds min
  }
  let sum = max(nums) + min(nums);

  return sum;
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;