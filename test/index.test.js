const expect = require('chai').expect;
const sinon = require('sinon');
const sandbox = sinon.createSandbox();
const add = require('../src/index').add;

describe('add', () => {

  describe('should return sum', () => {
    it('of single number', () => {
      const result = add('2');
      expect(result).to.equal(2);
    });

    it('of two comma separated numbers', () => {
      const result = add('1,1');
      expect(result).to.equal(2);
    });

    it('of two other comma separated numbers', () => {
      const result = add('2,2');
      expect(result).to.equal(4);
    });

    it('of more than 2 comma separated numbers', () => {
      const result = add('1,1,1');
      expect(result).to.equal(3);
    });

    it('of two new space separated numbers', () => {
      const result = add('1\n1');
      expect(result).to.equal(2);
    });

    it('of two new space separated numbers', () => {
      const result = add('1\n1');
      expect(result).to.equal(2);
    });

    it('of two numbers with different delimiter', () => {
      const result = add("\\\\[**]\n1**1");
      expect(result).to.equal(2);
    });

    it('of three numbers with different delimiters', () => {
      const result = add("\\\\[**]\n1**1,1");
      expect(result).to.equal(3);
    });

    it('of four numbers with several different delimiters', () => {
      const result = add("\\\\[**][|]\n1**1,1|1");
      expect(result).to.equal(4);
    });
  });
});
