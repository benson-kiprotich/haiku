export const countNumVowels = (string) => {
  return /[aeiouy]/gi.test(string) ? string.match(/[aeiouy]/gi).length : 0;
};

// Count when two vowel sounds form one speech sound
export const countNumDipthongs = (string) => {
  return /[aeiouy][aeiouy]/gi.test(string)
    ? string.match(/[aeiouy][aeiouy]/gi).length
    : 0;
};

// Count silent vowels
export const countNumSilentVowels = (string) => {
  const silentA = /ally\b/gi.test(string) ? string.match(/ally\b/gi).length : 0;
  const silentE = /e\b/gi.test(string) ? string.match(/e\b/gi).length : 0;
  const anotherSilentE = /ed\b/gi.test(string)
    ? string.match(/ed\b/gi).length
    : 0;
  const silentU = /gu[aeiouy]/gi.test(string)
    ? string.match(/gu[aeiouy]/gi).length
    : 0;
  const oddSiltentI = /business/gi.test(string)
    ? string.match(/business/gi).length
    : 0;
  return silentA + silentE + anotherSilentE + silentU + oddSiltentI;
};
