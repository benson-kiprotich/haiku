import {
  checkIfHaiku,
  countNumDipthongs,
  countNumSilentVowels,
  countNumSyllables,
  countNumVowels,
} from '../src/haikuChecker';

/* eslint-disable no-undef */
describe('count the number of vowels', () => {
  test('should return the correct number of vowels in a string', () => {
    expect(countNumVowels('test number of vowels')).toEqual(6);
  });
});

describe('count the number of dipthongs', () => {
  test('should return the correct number of dipthongs in a string', () => {
    expect(countNumDipthongs('This boy loves raw meat')).toEqual(2);
  });
});

describe('count the number of silent vowels', () => {
  test('should return the correct number of silent vowels in a string', () => {
    expect(countNumSilentVowels('guide drastically business fixed')).toEqual(5);
  });
});

describe('count the number of syllables', () => {
  test('should return the correct number of syllables in a string', () => {
    expect(countNumSyllables('drastically business fixed')).toEqual(6);
  });
});

describe('check if the input is infact a Haiku', () => {
  test('should return true or false depending on whether poem is a haiku', () => {
    const line1 = 'An old silent pond';
    const line2 = 'A frog jumps into a pond--';
    const line3 = 'Splash! Silence again.';
    expect(checkIfHaiku(line1, line2, line3)).toEqual(true);
  });
});
