import { expect } from 'chai';
import add from '../../src/add';

describe('add.js unit test', () => {
  for (let step = 0; step < 10; step++) {
    const num1 = Math.floor(Math.random() * 110);
    const num2 = Math.floor(Math.random() * 110);
    const result = num1 + num2;
    expect(add(num1, num2)).to.equal(result); // checks for the number and compare result
  }
});
