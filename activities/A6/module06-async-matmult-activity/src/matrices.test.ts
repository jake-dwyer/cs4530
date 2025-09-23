import {
  nRows,
  nColumns,
  canMultiply,
  isSquare,
  nthRow,
  nthColumn,
  randomMatrix,
  matrixMultiply
} from './matrices';

describe('matrices.ts', () => {
  describe('nRows', () => {
    it('returns the number of rows', () => {
      expect(nRows([[1, 2], [3, 4]])).toBe(2);
      expect(nRows([])).toBe(0);
    });
  });

  describe('nColumns', () => {
    it('returns the number of columns', () => {
      expect(nColumns([[1, 2], [3, 4]])).toBe(2);
      expect(nColumns([])).toBe(0);
    });
    it('throws error for ragged matrix', () => {
      expect(() => nColumns([[1, 2], [3]])).toThrow('Ragged matrix');
    });
  });

  describe('canMultiply', () => {
    it('returns true if matrices can be multiplied', () => {
      expect(canMultiply([[1, 2]], [[1], [2]])).toBe(true);
    });
    it('returns false if matrices cannot be multiplied', () => {
      expect(canMultiply([[1, 2]], [[1, 2]])).toBe(false);
    });
  });

  describe('isSquare', () => {
    it('returns true for square matrix', () => {
      expect(isSquare([[1, 2], [3, 4]])).toBe(true);
    });
    it('returns false for non-square matrix', () => {
      expect(isSquare([[1, 2, 3], [4, 5, 6]])).toBe(false);
    });
  });

  describe('nthRow', () => {
    it('returns the nth row', () => {
      expect(nthRow([[1, 2], [3, 4]], 1)).toEqual([3, 4]);
    });
    it('throws error for out of bounds', () => {
      expect(() => nthRow([[1, 2]], 2)).toThrow('Row index out of bounds');
    });
  });

  describe('nthColumn', () => {
    it('returns the nth column', () => {
      expect(nthColumn([[1, 2], [3, 4]], 1)).toEqual([2, 4]);
    });
    it('throws error for out of bounds', () => {
      expect(() => nthColumn([[1, 2]], 2)).toThrow('Column index out of bounds');
    });
  });

  describe('randomMatrix', () => {
    it('returns a square matrix of given size', () => {
      const m = randomMatrix(3);
      expect(m.length).toBe(3);
      expect(m.every(row => row.length === 3)).toBe(true);
    });
  });

  describe('matrixMultiply', () => {
    it('multiplies two matrices', () => {
      const a = [
        [1, 2],
        [3, 4],
      ];
      const b = [
        [5, 6],
        [7, 8],
      ];
      expect(matrixMultiply(a, b)).toEqual([
        [19, 22],
        [43, 50],
      ]);
    });
    it('throws error for incompatible dimensions', () => {
      expect(() => matrixMultiply([[1, 2]], [[1, 2]])).toThrow('Incompatible matrix dimensions');
    });
  });
});
