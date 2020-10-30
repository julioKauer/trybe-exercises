const myFizzBuzz = require('./myFizzBuzz');

describe('myFizzBuzz', () => {
  it('should returns `fizzbuzz` if the argument is divisible by 3 and 5', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });

  it('should return `fizz` if the argument is divisible only by 3', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });

  it('should return `fizz` if the argument is divisible only by 5', () => {
    expect(myFizzBuzz(25)).toBe('buzz');
  });

  it('should returns the own argument if it is not disisible by 3 or 5', () => {
    expect(myFizzBuzz(17)).toBe(17);
  });

  it('should returns `false` if the argument is not a number', () => {
    expect(myFizzBuzz('this_is_not_a_number')).toBeFalsy();
  });
});
