function frequencyCounter(word) {
  // Insert code here;
  let stringArr = word.split(''); //creates an array of chars-
  let frequency = stringArr.reduce((key, value) => {
    key[value] = (key[value] ?? 0) + 1; //if current key[value] is null use 0 then + 1;
    return key;
  }, {});
  return frequency;
}

// Do not edit this line;
module.exports = frequencyCounter;