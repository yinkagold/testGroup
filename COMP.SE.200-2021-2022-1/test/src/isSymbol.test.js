import { expect } from 'chai';
const assert = require('assert');
import isSymbol from './../../src/isSymbol';

describe('IsSymbol.js unit test', () => {
  it('First scenario', function () {
    const result = isSymbol(Symbol.iterator);
    assert.equal(result, true);
  });
  it('Second scenario', function () {
    const result = isSymbol('abc');
    assert.equal(result, false);
  });
});
