const _ = require('../underbar');

describe('filter()', () => {
  it('filters an array to odd numbers', () => {
    const nums = [2, 4, 5, 6, 7, 8, 10, 11];
    expect(_.filter(nums, num => num % 2 === 1)).toEqual([5, 7, 11]);
  });

  it('filters an object to only numeric values', () => {
    const characterAttributes = {
      name: 'Thokul Mongothsbeard',
      honorific: 'Lord Thokul Mongothsbeard the Arcane',
      race: 'human',
      class: 'druid',
      strength: 4,
      constitution: 7,
      dexterity: 10,
      intelligence: 16,
      wisdom: 5,
      charisma: 4
    };

    const abilityScores = _.filter(characterAttributes, (value) => !isNaN(value));
    expect(abilityScores).toEqual([4, 7, 10, 16, 5, 4]);
  });

  it('filters an array to an array only of true boolean values', () => {
    const values = [true, false, false, 'true'];
    expect(_.filter(values, val => val === true)).toEqual([true]);
  });

  it('filters an object to only string values', () => {
    const person = {
      name: 'Happy',
      age: 25,
      ssn: 2332445570,
      address: 'Market Street, SFO, CA'
    };
    expect(_.filter(person, (value) => typeof(value) === 'string'));
  });
});