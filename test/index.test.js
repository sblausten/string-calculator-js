const expect = require('chai').expect;
const sinon = require('sinon');
const sandbox = sinon.createSandbox();
const add = require('../src/index');

describe('add', () => {

  it('should return single number', () => {
    const result = add('2');

    expect(result).to.equal(2);
  });
});
