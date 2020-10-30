const sum = require('./sum');

describe('sum', () => {
  it('should returns 9 when sum 4 with 5', () => {
    expect(sum(4, 5)).toBe(9);
  });

  it('should throws an error when a string is passed', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow();
  });

  it('should returns 0 when sum 0 with 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it('should throw error message "parameters must be numbers"', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow(/parameters must be numbers/);
  });
});
