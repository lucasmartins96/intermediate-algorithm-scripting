const assert = require('assert');
/*
Source: <https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/dna-pairing>

DNA Pairing
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
*/
function myPairElement(str) {
  const dnaBasePairs = [['A', 'T'], ['G', 'C']];
  const newPairing = str.split('').map((element) => {
    const elementPair = dnaBasePairs.find((pair) => pair.includes(element)).find((value) => value !== element);
    return [element, elementPair];
  });
  return newPairing;
}

assert.deepStrictEqual(myPairElement('ATCGA'), [['A','T'],['T','A'],['C','G'],['G','C'],['A','T']]);
assert.deepStrictEqual(myPairElement('TTGAG'), [['T','A'],['T','A'],['G','C'],['A','T'],['G','C']]);
assert.deepStrictEqual(myPairElement('CTCTA'), [['C','G'],['T','A'],['C','G'],['T','A'],['A','T']]);
/*
Get a help > Get a hint <https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-dna-pairing/16009>
*/
//Solution 1
function pairElement1(str) {
  // Return each strand as an array of two elements, the original and the pair.
  var paired = [];

  // Function to check with strand to pair.
  var search = function(char) {
    switch (char) {
      case "A":
        paired.push(["A", "T"]);
        break;
      case "T":
        paired.push(["T", "A"]);
        break;
      case "C":
        paired.push(["C", "G"]);
        break;
      case "G":
        paired.push(["G", "C"]);
        break;
    }
  };

  // Loops through the input and pair.
  for (var i = 0; i < str.length; i++) {
    search(str[i]);
  }

  return paired;
}

//Solution 2
function pairElement(str) {
  //create object for pair lookup
  var pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  };
  //split string into array of characters
  var arr = str.split("");
  //map character to array of character and matching pair
  return arr.map(x => [x, pairs[x]]);
}