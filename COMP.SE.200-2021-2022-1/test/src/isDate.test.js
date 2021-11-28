import { expect } from 'chai';
import isDate from './../../src/isDate';

describe('isDate.js', () => {
  it('Should checks if `value` is classified as a `Date` object.', () => {
    const testCases = [
      { test: new Date(), result: true },
      { test: 'Mon April 23 2012', result: false },
    ];

    testCases.map((testCase) => {
      expect(isDate(testCase.test)).to.equal(testCase.result);
    });
  });
});
