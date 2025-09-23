import {nColumns, nRows, type Matrix} from './matrices';
import remoteProduct from './remoteProduct';

// Function to multiply two matrices asynchronously using remoteProduct,
// waiting for each remote multiplication separately.

export default async function matrixMultiplyAsync1(a: Matrix, b: Matrix): Promise<Matrix> {
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
        // eslint-disable-next-line no-await-in-loop
        const addend = await remoteProduct(a[i][k], b[k][j]);
        result[i][j] += addend;
      }
    }
  }

  return result;
}
