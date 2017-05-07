const _ = require('../underbar');

describe('pluck()', () => {
  it('returns an array of just ages, given an array of people objects', () => {
    const people = [
      { name: 'Harriet', age: 12},
      { name: 'Lazarus', age: 999},
      { name: 'Bethany', age: 14}
    ];
    const result = _.pluck(people, 'age');
    expect(result).toEqual([12, 999, 14]);
  });

  it('returns an array of just grades, given an array of student objects', () => {
    const students = [
      {name: 'Leah', grade: 'third'},
      {name: 'Sara', grade: 'fifth'},
      {name: 'ChaCha', grade: 'pre-k'}
    ];
    const result = ['third', 'fifth', 'pre-k'];
    expect(result).toEqual(result);
  });

});