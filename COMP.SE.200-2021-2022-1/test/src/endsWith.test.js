import { expect } from 'chai';
import endsWith from './../../src/endsWith';

describe('endsWith.js unit test', () => {
  it('Check element index', function () {
    const result = endsWith('abc', 'c');
    expect(result).to.equal(true);
  });
  it('Check an element false case', function () {
    const result = endsWith('abc', 'a', -1);
    expect(result).to.equal(false);
  });
  it('Check element index index', function () {
    const result = endsWith('abc', 'a', 1);
    expect(result).to.deep.equal(true);
  });
  it('Check an element  index > string length', function () {
    const result = endsWith('abc', 'a', 7);
    expect(result).to.deep.equal(false);
  });
});
