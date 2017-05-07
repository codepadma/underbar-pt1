const _ = require('../underbar');

describe('first()', () => {
  it('returns the first element of an array', () => {
    expect(_.first(['a', 'b', 'c'])).toEqual('a');
  });

  it('returns the first 2 elements of an array', () => {
    expect(_.first(['a', 'b', 'c'], 2)).toEqual(['a', 'b']);
  });

  it('returns the whole array if you ask for more elements than it has', () => {
    expect(_.first(['a', 'b', 'c'], 5)).toEqual(['a', 'b', 'c']);
  });

  it('returns the elements in the array until the last but one', () => {
    expect(_.first(['a', 'b', 'c'], -1)).toEqual(['a', 'b']);
  });

  it('returns empty array if you ask for 0 elements', () => {
    expect(_.first(['a', 'b', 'c'], 0)).toEqual([]);
  });
});