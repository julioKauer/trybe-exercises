const assert = require('assert');

const names = [
  'Aanemarie',
  'Adervandes',
  'Akifusa',
  'Abegildo',
  'Adicellia',
  'Aladonata',
  'Abeladerco',
  'Adieidy',
  'Alarucha',
];
const countLetterA = (counter, letter) => {
  if (letter === 'A' || letter === 'a') {
    counter++;
  }
  return counter;
};
function containsA() {
  return names
    .reduce((names, name) => `${names}${name}`)
    .split('')
    .reduce(countLetterA, 0);
}

assert.deepEqual(containsA(), 20);
