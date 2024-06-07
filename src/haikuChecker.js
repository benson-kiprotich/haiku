export const countNumVowels = (string) => {
  return /[aeiouy]/gi.test(string) ? string.match(/[aeiouy]/gi).length : 0;
};

// Count when two vowel sounds form one speech sound
export const countNumDipthongs = (string) => {
  return /[aeiouy][aeiouy]/gi.test(string)
    ? string.match(/[aeiouy][aeiouy]/gi).length
    : 0;
};
