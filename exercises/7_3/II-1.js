const assert = require('assert');
function addOne(array) {
  // https://www.samanthaming.com/tidbits/35-es6-way-to-clone-an-array/#:~:text=Because%20arrays%20in%20JS%20are,under%20a%20new%20value%20variable.
  let arr = [...array];
  for (let index = 0; index < arr.length; index++) {
    arr[index] += 1;
  }
  return arr;
}

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepEqual(output, expected);
assert.deepEqual(myArray, unchanged);
