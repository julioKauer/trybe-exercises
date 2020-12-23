const assert = require('assert');

const greetPeople = (people) => {
  let greetings = [];
  for (const person in people) {
    let greeting = 'Hello ';
    greeting += people[person];
    greetings.push(greeting);
  }
  return greetings;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

assert.deepStrictEqual(greetPeople(parameter), result);
