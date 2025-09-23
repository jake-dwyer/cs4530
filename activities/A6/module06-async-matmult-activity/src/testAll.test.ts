import matrixMultiplyAsync1   from './matrixMultiplyAsync1';
import matrixMultiplyAsync2   from './matrixMultiplyAsync2';
// import matrixMultiplyAsync3   from './matrixMultiplyAsync3';
import type { Matrix } from './matrices';

// put call at top for clarity
// eslint-disable-next-line @typescript-eslint/no-use-before-define
testAssertions('matrixMultiplyAsync1', matrixMultiplyAsync1);
testAssertions('matrixMultiplyAsync2', matrixMultiplyAsync2);
// testAssertions('matrixMultiplyAsync3', matrixMultiplyAsync3);

function testAssertions(multiplierName: string,
  multiplierUnderTest: (a: Matrix, b: Matrix) => Promise<Matrix>) {
  const matrixMultiply = multiplierUnderTest;

describe(`matrixMultiply with ${multiplierName}`, () => {
  it(`multiplies two 2x2 matrices with ${multiplierName}`, async () => {
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
    await expect(matrixMultiply(a, b)).resolves.toEqual(expected);
    // another way to do it, maybe clearer.
    expect(await matrixMultiply(a, b)).toEqual(expected);
    expect.assertions(2);
  });

  it(`multiplies a 2x3 and 3x2 matrix with ${multiplierName}`, async () => {
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
    expect(await matrixMultiply(a, b)).toEqual(expected);
    expect.assertions(1);
  });

  it(`multiplies a 2x3 and 3x2 matrix with ${multiplierName}`, async () => {
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
    expect(await matrixMultiply(a, b)).toEqual(expected);
    expect.assertions(1);
  });

  it(`throws error for incompatible dimensions with ${multiplierName}`, async () => {
    const a: Matrix = [
      [1, 2, 3],
      [4, 5, 6],
    ]; // 2x3
    const c: Matrix = [
      [1, 2, 3],
      [4, 5, 6],
    ]; // 2x3
    expect.assertions(1);
    await expect(matrixMultiply(a, c)).rejects.toThrow('Incompatible matrix dimensions');
  });


  it(`returns an empty matrix when multiplying two empty matrices with ${multiplierName}`, async () => {
    const a: Matrix = [];
    const b: Matrix = [];
    expect.assertions(1);
    await expect(matrixMultiply(a, b)).resolves.toEqual([]);
  });
});
}
