const assert = require('assert');
/*
Source: <https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/convert-html-entities>

Convert HTML Entities

Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/
function myConvertHTML(str) {
  /* return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&apos;'); 
  */
 const HTMLEntities = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;'
  }
  
  const HTMLEntitiesKeys = Object.keys(HTMLEntities);
  const fetchHTMLEntities = (char) => HTMLEntitiesKeys.includes(char) ? char = HTMLEntities[char] : char;
  return str.split('').map(fetchHTMLEntities).join('');
}

assert.strictEqual(myConvertHTML('Dolce & Gabbana'), 'Dolce &amp; Gabbana');
assert.strictEqual(myConvertHTML('Hamburgers < Pizza < Tacos'), 'Hamburgers &lt; Pizza &lt; Tacos');
assert.strictEqual(myConvertHTML('Sixty > twelve'), 'Sixty &gt; twelve');
assert.strictEqual(myConvertHTML('Stuff in "quotation marks"'), 'Stuff in &quot;quotation marks&quot;');
assert.strictEqual(myConvertHTML(`Schindler's List`), 'Schindler&apos;s List');
assert.strictEqual(myConvertHTML('<>'), '&lt;&gt;');
assert.strictEqual(myConvertHTML('abc'), 'abc');
/*
Get a help > Get a hint <https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-convert-html-entities/16007>
*/
//Solution 1
function convertHTML1(str) {
  // Split by character to avoid problems.
  var temp = str.split("");

  // Since we are only checking for a few HTML elements, use a switch
  for (var i = 0; i < temp.length; i++) {
    switch (temp[i]) {
      case "<":
        temp[i] = "&lt;";
        break;
      case "&":
        temp[i] = "&amp;";
        break;
      case ">":
        temp[i] = "&gt;";
        break;
      case '"':
        temp[i] = "&quot;";
        break;
      case "'":
        temp[i] = "&apos;";
        break;
    }
  }

  temp = temp.join("");
  return temp;
}

//Solution 2
function convertHTML2(str) {
  // Use Object Lookup to declare as many HTML entities as needed.
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };
  // Using a regex, replace characters with it's corresponding html entity
  return str.replace(/([&<>\"'])/g, match => htmlEntities[match]);
}

//Solution 3
function convertHTML3(str) {
  // Use Object Lookup to declare as many HTML entities as needed.
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };
  //Use map function to return a filtered str with all entities changed automatically.
  return str
    .split("")
    .map(entity => htmlEntities[entity] || entity)
    .join("");
}