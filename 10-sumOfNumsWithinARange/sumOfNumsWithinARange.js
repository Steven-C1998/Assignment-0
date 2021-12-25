function sumOfNumsWithinARange(nums, start, end) {
  // Insert code here;
  function range(x){
  return this[0] <= x && x <= this[1]
  }
  let count = nums.filter(range, [start, end]).length;
  return count;
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;