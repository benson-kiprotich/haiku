import { countNumVowels } from '../src/haikuChecker';

/* eslint-disable no-undef */
describe('countNumVowels', () => {
  test('should return the correct number of vowels in a string', () => {
    expect(countNumVowels('test number of vowels')).toEqual(6);
  });
});
