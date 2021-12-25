function titleCaseEdit(title) {
  // Insert code here;
  let titleHolder = title;
  let stringHolder = titleHolder.split(" ");
  for (let i = 0; i <stringHolder.length; i++){
    stringHolder[i] = stringHolder[i].charAt(0).toUpperCase() +
    stringHolder[i].slice(1);
  }

  let stringTogether = stringHolder.join(" ");
  return stringTogether;
}

// Do not edit this line;
module.exports = titleCaseEdit;