const assert = require('assert');
function findTheNeedle(words, string) {
  for (let index = 0; index < words.length; index++) {
    const element = words[index];
    if (element === string) {
      return index;
    }
  }
    return -1;
}

  // gabarito tá um pouco melhor para ler
const findTheNeedleGabarito = (array, word) => {
  let output = -1;
  for (const index in array) {
    if (word === array[index]) {
      output = Number(index);
    }
  }
  return output;
};

let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);
