import { expect } from 'chai';
import filter from './../../src/filter';

const users = [
  { user: 'josh', active: true },
  { user: 'tim', active: false },
];

describe('filter.js unit test', () => {
  it('First', function () {
    const result = filter(users, ({ active }) => active);
    expect(result).to.deep.equal([{ user: 'josh', active: true }]);
  });
  it('Second', function () {
    const result = filter(users, ({ active }) => !active);
    expect(result).to.deep.equal([{ user: 'tim', active: false }]);
  });
});
