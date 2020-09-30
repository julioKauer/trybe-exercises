const assert = require('assert');
function wordLengths(words) {
  let array = [];
  words.forEach(word => {
    array.push(word.length);
  });
  return array;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepEqual(output, expected);
