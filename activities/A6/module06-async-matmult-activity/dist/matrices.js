export function nRows(matrix) {
    return matrix.length;
}
// Function to get the number of columns in a matrix.
// if matrix is ragged, throws error.
export function nColumns(matrix) {
    if (matrix.length === 0)
        return 0;
    var colCount = matrix[0].length;
    if (matrix.some(function (row) { return row.length !== colCount; })) {
        throw new Error("Ragged matrix");
    }
    return colCount;
}
// Function to check if two matrices can be multiplied
export function canMultiply(a, b) {
    return nColumns(a) === nRows(b);
}
export function isSquare(matrix) {
    return nRows(matrix) === nColumns(matrix);
}
export function nthRow(matrix, n) {
    if (n < 0 || n >= nRows(matrix)) {
        throw new Error("Row index out of bounds");
    }
    return matrix[n];
}
export function nthColumn(matrix, n) {
    if (n < 0 || n >= nColumns(matrix)) {
        throw new Error("Column index out of bounds");
    }
    return matrix.map(function (row) { return row[n]; });
}
export function randomMatrix(size) {
    var matrix = [];
    for (var i = 0; i < size; i++) {
        var row = [];
        for (var j = 0; j < size; j++) {
            row.push(Math.random());
        }
        matrix.push(row);
    }
    return matrix;
}
// throws error if either matrix is ragged or if dimensions are incompatible
export function matrixMultiply(a, b) {
    var aRows = nRows(a);
    var aColumns = nColumns(a);
    var bRows = nRows(b);
    var bColumns = nColumns(b);
    if (aColumns !== bRows) {
        throw new Error("Incompatible matrix dimensions");
    }
    // Initialize result matrix with zeros
    var result = Array.from({ length: aRows }, function () { return Array(bColumns).fill(0); });
    for (var i = 0; i < aRows; i++) {
        for (var j = 0; j < bColumns; j++) {
            for (var k = 0; k < aColumns; k++) {
                result[i][j] += a[i][k] * b[k][j];
            }
        }
    }
    return result;
}
