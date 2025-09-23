// Type for a 2-dimensional matrix with variable size
// and elements of type T (defaulting to number)
export type Matrix<T = number> = T[][];

export function nRows<T>(matrix: Matrix<T>): number {
  return matrix.length;
}

// Function to get the number of columns in a matrix.
// if matrix is ragged, throws error.
export function nColumns<T>(matrix: Matrix<T>): number {
    if (matrix.length === 0) return 0;
    const colCount = matrix[0].length;
    if (matrix.some(row => row.length !== colCount)) {
        throw new Error("Ragged matrix");
    }    
    return colCount;
}

// Function to check if two matrices can be multiplied
export function canMultiply<T>(a: Matrix<T>, b: Matrix<T>): boolean {
  return nColumns(a) === nRows(b);
}

export function isSquare<T>(matrix: Matrix<T>): boolean {
  return nRows(matrix) === nColumns(matrix);
}

export function nthRow<T>(matrix: Matrix<T>, n: number): T[] {
  if (n < 0 || n >= nRows(matrix)) {
    throw new Error("Row index out of bounds");
  }
  return matrix[n];
}

export function nthColumn<T>(matrix: Matrix<T>, n: number): T[] {
  if (n < 0 || n >= nColumns(matrix)) {
    throw new Error("Column index out of bounds");
  }
  return matrix.map(row => row[n]);
}

export function randomMatrix(size: number): Matrix {
  const matrix: Matrix = [];
  for (let i = 0; i < size; i++) {
    const row: number[] = [];
    for (let j = 0; j < size; j++) {
      row.push(Math.random());
    }
    matrix.push(row);
  }
  return matrix;
}

// throws error if either matrix is ragged or if dimensions are incompatible
export function matrixMultiply(a: Matrix, b: Matrix): Matrix {
  const aRows = nRows(a);
  const aColumns = nColumns(a);
  const bRows = nRows(b);
  const bColumns = nColumns(b);
  if (aColumns !== bRows) {
    throw new Error("Incompatible matrix dimensions");
  }

  // Initialize result matrix with zeros
  const result: Matrix = Array.from({ length: aRows }, () => Array(bColumns).fill(0));

  for (let i = 0; i < aRows; i++) {
    for (let j = 0; j < bColumns; j++) {
      for (let k = 0; k < aColumns; k++) {
        result[i][j] += a[i][k] * b[k][j];
      }
    }
  }

  return result;
}

