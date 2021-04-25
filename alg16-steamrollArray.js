/*
Source: <https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/steamroller>

Steamroller

Flatten a nested array. You must account for varying levels of nesting.
*/
function mySteamrollArray(arr) {
  //Source: <https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/flat>
  return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(mySteamrollArray(val)) : acc.concat(val), []);
}
/*
Get a help > Get a hint <https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-steamroller/16079>
*/
//Solution 1

//Solution 2
function steamrollArray2(arr) {
  const flat = [].concat(...arr);
  return flat.some(Array.isArray) ? steamrollArray2(flat) : flat;
}

//Solution 3
function steamrollArray3(arr) {
  return arr
    .toString()
    .replace(",,", ",") // "1,2,,3" => "1,2,3"
    .split(",") // ['1','2','3']
    .map(function(v) {
      if (v == "[object Object]") {
        // bring back empty objects
        return {};
      } else if (isNaN(v)) {
        // if not a number (string)
        return v;
      } else {
        return parseInt(v); // if a number in a string, convert it
      }
    });
}

//Solution 4
function steamrollArray4(val,flatArr=[]) {
  val.forEach(item => {
    if (Array.isArray(item)) steamrollArray4(item, flatArr);
    else flatArr.push(item);
  });
  return flatArr;
}

//Solution 5
function steamrollArray5(arr, flatArr = []) {
  const elem = arr.pop();
  return elem
    ? !Array.isArray(elem)
      ? steamrollArray5(arr, [elem, ...flatArr])
      : steamrollArray5(arr.concat(elem), flatArr)
    : flatArr;
}