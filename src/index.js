
function add(numbersAsString) {
  const numbersAsArray = numbersAsString.split(',');
  return numbersAsArray
    .map((numberAsString) => parseInt(numberAsString))
    .reduce((a, b) => a+b);
}

module.exports = add;
