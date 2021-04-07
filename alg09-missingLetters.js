const assert = require('assert');
/*
Source: <https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/missing-letters>

Missing letters
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/
function myFearNotLetter(str) {
  const strlength = str.length;
  if (str[0] === 'a' && str[strlength - 1] === 'z') {
    return undefined;
  }
  const regexRange = RegExp(`[${str[0]}-${str[strlength - 1]}]`, 'g');
  const strRegex = RegExp(`[^${str}]`, 'g');
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const extractedRange = alphabet.match(regexRange).join('');
  const missingLetter = extractedRange.match(strRegex).join('');
  return missingLetter;
}

assert.strictEqual(myFearNotLetter("abce"), 'd');
assert.strictEqual(myFearNotLetter("abcdefghjklmno"), 'i');
assert.strictEqual(myFearNotLetter("stvwx"), 'u');
assert.strictEqual(myFearNotLetter("bcdf"), 'e');
assert.strictEqual(myFearNotLetter("abcdefghijklmnopqrstuvwxyz"), undefined);
/*
Get a help > Get a hint <https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-missing-letters/16023>
*/
//Solution 1
function fearNotLetter1(str) {
  for (var i = 0; i < str.length; i++) {
    /* code of current character */
    var code = str.charCodeAt(i);

    /* if code of current character is not equal to first character + no of iteration
        hence character has been escaped */
    if (code !== str.charCodeAt(0) + i) {
      /* if current character has escaped one character find previous char and return */
      return String.fromCharCode(code - 1);
    }
  }
  return undefined;
}

//Solution 2
// Adding this solution for the sake of avoiding using 'for' and 'while' loops.
// See the explanation for reference as to why. It's worth the effort.

function fearNotLetter2(str) {
  var compare = str.charCodeAt(0),
    missing;

  str.split("").map(function(letter, index) {
    if (str.charCodeAt(index) == compare) {
      ++compare;
    } else {
      missing = String.fromCharCode(compare);
    }
  });

  return missing;
}

//Solution 3
function fearNotLetter3(str) {
  for (let i = 1; i < str.length; ++i) {
    if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
      return String.fromCharCode(str.charCodeAt(i - 1) + 1);
    }
  }
}

//Solution 4
function fearNotLetter(str) {
  var allChars = "";
  var notChars = new RegExp("[^" + str + "]", "g");

  for (var i = 0; allChars[allChars.length - 1] !== str[str.length - 1]; i++)
    allChars += String.fromCharCode(str[0].charCodeAt(0) + i);

  return allChars.match(notChars)
    ? allChars.match(notChars).join("")
    : undefined;
}