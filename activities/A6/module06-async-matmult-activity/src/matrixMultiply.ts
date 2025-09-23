import {nColumns, nRows, type Matrix} from './matrices';

// Function to multiply two matrices
export default function matrixMultiply(a: Matrix, b: Matrix): Matrix {
  const aRows = nRows(a);
  const aColumns = nColumns(a);
  const bRows = nRows(b);
  const bColumns = nColumns(b);

    if (aColumns !== bRows) {
    throw new Error("Incompatible matrix dimensions");
    }   

    // Resultant matrix will have dimensions of aRows x bColumns

  // Initialize result matrix with zeros
  const result: Matrix = Array.from({ length: aRows }, () => Array(bColumns).fill(0));

  for (let i = 0; i < aRows; i++) {
    for (let j = 0; j < bColumns; j++) {
      for (let k = 0; k < aColumns; k++) {
        const addend = a[i][k] * b[k][j];
        result[i][j] += addend;
      }
    }
  }

  return result;
}
