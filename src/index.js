
function add(numbersAsString) {
  return numbersAsString
    .split(/[,\n]/)
    .map((numberAsString) => parseInt(numberAsString))
    .reduce((a, b) => a+b);
}

module.exports = add;
