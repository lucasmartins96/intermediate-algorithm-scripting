/*
Source: <https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/diff-two-arrays>

Diff Two Arrays
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.
*/
function myDiffArray(arr1, arr2) {
  let newArr = [];
  const mergedArr = arr1.concat(arr2);
  const res = mergedArr.filter((element) => {
    if (!arr1.includes(element) || !arr2.includes(element))
      return element
  });
  console.log(newArr.concat(res));
  // return newArr;
}

myDiffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
myDiffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
myDiffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]);
myDiffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);
myDiffArray([], ["snuffleupagus", "cookie monster", "elmo"]);
myDiffArray([1, "calf", 3, "piglet"], [7, "filly"]);
/*
Get a help > Get a hint <https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-diff-two-arrays/16008>
*/
//Solution 1
function diffArray1(arr1, arr2) {
  var newArr = [];

  function onlyInFirst(first, second) {
    // Looping through an array to find elements that don't exist in another array
    for (var i = 0; i < first.length; i++) {
      if (second.indexOf(first[i]) === -1) {
        // Pushing the elements unique to first to newArr
        newArr.push(first[i]);
      }
    }
  }

  onlyInFirst(arr1, arr2);
  onlyInFirst(arr2, arr1);

  return newArr;
}

//Solution 2
function diffArray2(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter(item => !arr1.includes(item) || !arr2.includes(item));
}

//Solution 3
function diffArray3(arr1, arr2) {
  return [...diff(arr1, arr2), ...diff(arr2, arr1)];

  function diff(a, b) {
    return a.filter(item => b.indexOf(item) === -1);
  }
}
