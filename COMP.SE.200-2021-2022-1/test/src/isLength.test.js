import { expect } from 'chai';
const assert = require('assert');
import isLength from './../../src/isLength';

describe('isLength.js unit test', () => {
  it('First case', function () {
    const result = isLength(3);
    assert.equal(result, true);
  });
  it('Second case', function () {
    const result = isLength(Number.MIN_VALUE);
    assert.equal(result, false);
  });
  it('Third case', function () {
    const result = isLength(Infinity);
    assert.equal(result, false);
  });
  it('Fourth case', function () {
    const result = isLength('3');
    assert.equal(result, false);
  });
});
