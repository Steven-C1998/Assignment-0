function isPalindrome(word) {
  // Insert code here;
  //creates and reverse the string
  let reverseString = word.toLowerCase().split('').reverse().join('');
  //matches case
  let lowerCaseWord = word.toLowerCase();
  return (lowerCaseWord == reverseString);
}

// Do not edit this line;
module.exports = isPalindrome;