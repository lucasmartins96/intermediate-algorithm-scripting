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
Get a help > Get a hint <https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-binary-agents/14273>
*/
//Solution 1
function binaryAgent1(str) {
  var biString = str.split(" ");
  var uniString = [];

  /*using the radix (or base) parameter in parseInt, we can convert the binary
      number to a decimal number while simultaneously converting to a char*/

  for (var i = 0; i < biString.length; i++) {
    uniString.push(String.fromCharCode(parseInt(biString[i], 2)));
  }

  // we then simply join the string
  return uniString.join("");
}

//Solution 2
function binaryAgent2(str) {
  // Separate the binary code by space.
  str = str.split(" ");
  var power;
  var decValue = 0;
  var sentence = "";

  // Check each binary number from the array.
  for (var s = 0; s < str.length; s++) {
    // Check each bit from binary number
    for (var t = 0; t < str[s].length; t++) {
      // This only takes into consideration the active ones.
      if (str[s][t] == 1) {
        // This is quivalent to 2 ** position
        power = Math.pow(2, +str[s].length - t - 1);
        decValue += power;

        // Record the decimal value by adding the number to the previous one.
      }
    }

    // After the binary number is converted to decimal, convert it to string and store
    sentence += String.fromCharCode(decValue);

    // Reset decimal value for next binary number.
    decValue = 0;
  }

  return sentence;
}

//Solution 3
function binaryAgent3(str) {
  return String.fromCharCode(
    ...str.split(" ").map(function(char) {
      return parseInt(char, 2);
    })
  );
}

//Solution 4
const binaryAgent4 = str => str.replace(/\d+./g, char => String.fromCharCode(`0b${char}`));