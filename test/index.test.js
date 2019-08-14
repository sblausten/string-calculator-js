const expect = require('chai').expect;
const sinon = require('sinon');
const sandbox = sinon.createSandbox();
const add = require('../src/index');

describe('add', () => {

  it('should return single number', () => {
    const result = add('2');

    expect(result).to.equal(2);
  });

  it('should return sum of two comma separated numbers', () => {
    const result = add('1,1');

    expect(result).to.equal(2);
  });

  it('should return sum of two other comma separated numbers', () => {
    const result = add('2,2');

    expect(result).to.equal(4);
  });
});
