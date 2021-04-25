const assert = require('assert');
/*
Source: <https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/binary-agents>

Binary Agents

Return an English translated sentence of the passed binary string.

The binary string will be space separated.
*/
function myBinaryAgent(str) {
  const translatedSentence = str.split(' ')
    .map((binary) => String.fromCharCode(parseInt(binary, 2)))
    .join('');
 return translatedSentence;
}

myBinaryAgent('01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111')

assert.strictEqual(
  myBinaryAgent('01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111')
  , 'Aren\'t bonfires fun!?'
);
assert.strictEqual(
  myBinaryAgent('01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001')
  , 'I love FreeCodeCamp!'
);
/*
Get a help > Get a hint <>
*/