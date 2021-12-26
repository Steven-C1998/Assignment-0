function titleCaseEdit(title) {
  // Insert code here;
  let stringHolder = title.split(" "); //split string
  for (let i = 0; i < stringHolder.length; i++){ //capitalizes the title
    stringHolder[i] = stringHolder[i].charAt(0).toUpperCase() +
    stringHolder[i].slice(1);
  }
  let stringTogether = stringHolder.join(" ");
  return stringTogether;
}

// Do not edit this line;
module.exports = titleCaseEdit;