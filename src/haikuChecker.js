export const countNumVowels = (string) => {
  return /[aeiouy]/gi.test(string) ? string.match(/[aeiouy]/gi).length : 0;
};
