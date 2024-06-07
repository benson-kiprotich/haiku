import {
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
