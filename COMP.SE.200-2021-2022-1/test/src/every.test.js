import { expect } from 'chai';
const assert = require('assert');
import every from './../../src/every';

describe('every.js unit test', () => {
  it('Checking type', function () {
    const result = every([true, 1, null, 'yes'], Boolean);
    assert.equal(result, false);
  });
  it('Checking empty elements', function () {
    const result = every([], Boolean);
    assert.equal(result, true);
  });
  it('Checking true elements', function () {
    const result = every([1, 2, 3, 4], Boolean);
    assert.equal(result, true);
  });
});
