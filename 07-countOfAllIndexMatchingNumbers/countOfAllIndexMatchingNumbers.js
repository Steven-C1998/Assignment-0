function countOfAllIndexMatchingNumbers(nums) {
  // Insert code here;
  let count = 0;
  for (let i = 0; i < nums.length; i++){
    let compare = nums[i];
    if(i == compare){
      count++;
    }
  }
  return count;
}

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;