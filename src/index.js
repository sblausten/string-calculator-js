
function add(string) {
  let delimitersRegex = /[,\n]/;
  let numbersAsString = string;

  if (string.startsWith("\\")) {
    delimitersRegex = _updateDelimitersRegex(string, delimitersRegex);
    numbersAsString = string.slice(string.indexOf('\n') + 1);
  }

  const numbersAsStringsArray = numbersAsString
    .split(delimitersRegex)
    .filter((element) => element.length > 0);

  const numbersAsArray = numbersAsStringsArray
    .map((numberAsString) => parseInt(numberAsString));

  const sum = numbersAsArray
    .reduce((a, b) => a+b);

  return sum;
}

function _extractDelimiters(stringWithDelimiters) {
  let delimitersString = stringWithDelimiters
  .substring(2, stringWithDelimiters.indexOf('\n'));

  const extractedDelimiters = [];
  while (delimitersString.includes('[')) {
    const { remainingDelimiters, extractedDelimiter } = _getDelimiterAndRemainingString(delimitersString);
    extractedDelimiters.push(extractedDelimiter);
    delimitersString = remainingDelimiters;
  }

  return extractedDelimiters;
}

function _updateDelimitersRegex(string, delimitersRegex) {
  const additionalDelimitersArray = _extractDelimiters(string)
  const additionalDelimiters = additionalDelimitersArray
  .map((delimiter) => '(' + delimiter + ')')
  .join();
  delimitersRegex = new RegExp('[,\\n' + additionalDelimiters + ']');
  return delimitersRegex;
};

function _getDelimiterAndRemainingString(stringWithDelimiters) {
  let start = stringWithDelimiters.indexOf('[');
  let end = stringWithDelimiters.indexOf(']');
  const extractedDelimiter = stringWithDelimiters.substring(start + 1, end);

  let remainingDelimiters = stringWithDelimiters.slice(end + 1, stringWithDelimiters.length);
  return { remainingDelimiters, extractedDelimiter };
}



module.exports.add = add;
