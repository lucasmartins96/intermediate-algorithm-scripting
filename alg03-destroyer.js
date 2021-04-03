/*
Source: <https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/seek-and-destroy>

Seek and Destroy
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note: You have to use the arguments object.
*/
function myDestroyer(arr) {
  const initialArr = arguments[0];
  const params = Array.from(arguments).slice(1);
  return initialArr.filter((element) => !params.includes(element));
}

const out1 = myDestroyer([1, 2, 3, 1, 2, 3], 2, 3); //[1, 1]
const out2 = myDestroyer([1, 2, 3, 1, 2, 3], 2, 3); //[1, 5, 1]
const out3 = myDestroyer(["tree", "hamburger", 53], "tree", 53); //["hamburger"]
const out4 = myDestroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"); //[12, 92, 65]
console.log(out1, out2, out3, out4);
/*
Get a help > Get a hint <https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-seek-and-destroy/16046>
*/
//Solution 1
function destroyer1(arr) {
  let valsToRemove = Object.values(arguments).slice(1);

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < valsToRemove.length; j++) {
      if (arr[i] === valsToRemove[j]) {
        delete arr[i];
      }
    }
  }
  return arr.filter(item => item !== null);
}

//Solution 2
function destroyer2(arr) {
  var valsToRemove = Array.from(arguments).slice(1);
  console.log(valsToRemove);
  return arr.filter(function(val) {
    return !valsToRemove.includes(val);
  });
}

//Solution 3
function destroyer3(arr, ...valsToRemove) {
  return arr.filter(elem => !valsToRemove.includes(elem));
}