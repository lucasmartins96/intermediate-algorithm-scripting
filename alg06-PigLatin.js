const assert = require('assert');
/*
Source: <https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/pig-latin>

Pig Latin
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.
*/
function myTranslatePigLatin(str) {
  const regex = /(^[b-df-hj-np-tv-z]+)(\w*)/g;
  if (regex.test(str)){
    return str.replace(regex, '$2$1ay');
  }
  return str.concat('way');
}
assert.deepStrictEqual(myTranslatePigLatin("consonant"), 'onsonantcay');
assert.deepStrictEqual(myTranslatePigLatin("california"), 'aliforniacay');
assert.deepStrictEqual(myTranslatePigLatin("paragraphs"), 'aragraphspay');
assert.deepStrictEqual(myTranslatePigLatin("algorithm"), 'algorithmway');
assert.deepStrictEqual(myTranslatePigLatin("eight"), 'eightway');
assert.deepStrictEqual(myTranslatePigLatin("schwartz"), 'artzschway');
assert.deepStrictEqual(myTranslatePigLatin("rhythm"), 'rhythmay');
/*
Get a help > Get a hint <https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-pig-latin/16039>
*/
//Solution 1
function translatePigLatin1(str) {
  let consonantRegex = /^[^aeiou]+/;
  let myConsonants = str.match(consonantRegex);
  return myConsonants !== null
    ? str
        .replace(consonantRegex, "")
        .concat(myConsonants)
        .concat("ay")
    : str.concat("way");
}

//Solution 2
function translatePigLatin2(str) {
  // Create variables to be used
  var pigLatin = "";
  var regex = /[aeiou]/gi;

  // Check if the first character is a vowel
  if (str[0].match(regex)) {
    pigLatin = str + "way";
  } else if (str.match(regex) === null) {
    // Check if the string contains only consonants
    pigLatin = str + "ay";
  } else {
    // Find how many consonants before the first vowel.
    var vowelIndice = str.indexOf(str.match(regex)[0]);

    // Take the string from the first vowel to the last char
    // then add the consonants that were previously omitted and add the ending.
    pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + "ay";
  }

  return pigLatin;
}

//Solution 3
function translatePigLatin3(str) {
  if (str.match(/^[aeiou]/)) return str + "way";

  const consonantCluster = str.match(/^[^aeiou]+/)[0];
  return str.substring(consonantCluster.length) + consonantCluster + "ay";
}

//Solution 4
function translatePigLatin4(str) {
  return str
    .replace(/^[aeiou]\w*/, "$&way")
    .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
}

//Solution 5
function translatePigLatin5(str, charPos = 0) {
  return ['a', 'e', 'i', 'o', 'u'].includes(str[0])
    ? str + (charPos === 0 ? 'way' : 'ay')
    : charPos === str.length
      ? str + 'ay'
      : translatePigLatin(str.slice(1) + str[0], charPos + 1);
}