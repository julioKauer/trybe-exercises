const myRemoveWithoutCopy = require('./myRemoveWithoutCopy');

describe('should myRemoveWithoutCopy', () => {
  it('should returns the same array without the item if the item belongs to it', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  it('should returns the correct array', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  it('should changes the passed array', () => {
    const arr = [1, 2, 3, 4];
    myRemoveWithoutCopy(arr, 1);
    expect(arr).toEqual([2, 3, 4]);
  });

  it('should returns an identical array if the item does not belong to it', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});
