const _ = require('../underbar');

describe('some()', () => {
  it('returns true if any number is odd', () => {
    const nums = [2, 4, 5, 6];
    expect(_.some(nums, num => num % 2 === 1)).toBe(true);
  });

  it('returns false if no number is odd', () => {
    const nums = [2, 4, 6, 8];
    expect(_.some(nums, num => num % 2 === 1)).toBe(false);
  });

  it('returns true if there is atleast a number which is a multiple of 5', () => {
  	const nums = [5, 67, 78, 45];
  	expect(_.some(nums, num => num % 5 === 0)).toBe(true);
  });

  it('returns false if there is no number which is a multiple of 5', () => {
  	const nums = [56, 67, 78, 98];
  	expect(_.some(nums, num => num % 5 === 0)).toBe(false);
  });

});