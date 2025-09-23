import matrixMultiply from './matrixMultiply';
import type { Matrix } from './matrices';

describe('matrixMultiply', () => {
  it('multiplies two 2x2 matrices', () => {
    const a: Matrix = [
      [1, 2],
      [3, 4],
    ];
    const b: Matrix = [
      [5, 6],
      [7, 8],
    ];
    const expected: Matrix = [
      [19, 22],
      [43, 50],
    ];
    expect(matrixMultiply(a, b)).toEqual(expected);
  });

  it('multiplies a 2x3 and 3x2 matrix', () => {
    const a: Matrix = [
      [1, 2, 3],
      [4, 5, 6],
    ];
    const b: Matrix = [
      [7, 8],
      [9, 10],
      [11, 12],
    ];
    const expected: Matrix = [
      [58, 64],
      [139, 154],
    ];
    expect(matrixMultiply(a, b)).toEqual(expected);
  });

  it('throws error for incompatible dimensions', () => {
    const a: Matrix = [
      [1, 2, 3],
      [4, 5, 6],
    ]; // 2x3
    const c: Matrix = [
      [1, 2, 3],
      [4, 5, 6],
    ]; // 2x3
    expect(() => matrixMultiply(a, c)).toThrow('Incompatible matrix dimensions');
  });

  it('multiplies with identity matrix', () => {
    const a: Matrix = [
      [1, 2],
      [3, 4],
    ];
    const identity: Matrix = [
      [1, 0],
      [0, 1],
    ];
    expect(matrixMultiply(a, identity)).toEqual(a);
    expect(matrixMultiply(identity, a)).toEqual(a);
  });

  it('returns an empty matrix when multiplying two empty matrices', () => {
    const a: Matrix = [];
    const b: Matrix = [];
    expect(matrixMultiply(a, b)).toEqual([]);
  });
});
