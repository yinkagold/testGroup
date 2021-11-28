import { expect } from 'chai';
import defaultTo from './../../src/defaultTo';

describe('defaultTo.js unit test', () => {
  it('normal cases', function () {
    const result = defaultTo(1, 10);
    expect(result).to.equal(1);
  });
  it('false', function () {
    const result1 = defaultTo(10);
    expect(result1).to.equal(10);
  });
});
