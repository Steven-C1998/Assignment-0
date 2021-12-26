function isPalindrome(word) {
  // Insert code here;
  let reverseString = word.toLowerCase().split('').reverse().join('');
  let lowerCaseWord = word.toLowerCase();
  return (lowerCaseWord == reverseString);
}

// Do not edit this line;
module.exports = isPalindrome;