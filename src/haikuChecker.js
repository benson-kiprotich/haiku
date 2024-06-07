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

// count the number of syllables
export const countNumSyllables = (string) => {
  return (
    countNumVowels(string) -
    countNumDipthongs(string) -
    countNumSilentVowels(string)
  );
};

// Check each line's syllables
export const checkIfHaiku = (line1, line2, line3) => {
  const line1SyllableCount = countNumSyllables(line1);
  const line2SyllableCount = countNumSyllables(line2);
  const line3SyllableCount = countNumSyllables(line3);
  return (
    line1SyllableCount === 5 &&
    line2SyllableCount === 7 &&
    line3SyllableCount === 5
  );
};
