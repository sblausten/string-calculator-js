
function add(numbersAsString) {
  return numbersAsString.split(',')
    .map((numberAsString) => parseInt(numberAsString))
    .reduce((a, b) => a+b);
}

module.exports = add;
