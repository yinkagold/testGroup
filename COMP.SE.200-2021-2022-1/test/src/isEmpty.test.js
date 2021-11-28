import { expect } from 'chai';
import isEmpty from './../../src/isEmpty';

describe('isEmpty.js unit test', () => {
  it('Should check if `value` is an empty object, map, array, collection or set', () => {
    const testCases = [
      { test: null, result: true },
      { test: '', result: true },
      { test: [], result: true },
      { test: {}, result: true },
      { test: 'abc', result: false },
      { test: [1, 2, 3], result: false },
    ];

    testCases.map((testCase) => {
      expect(isEmpty(testCase.test)).to.equal(testCase.result);
    });
  });
});
