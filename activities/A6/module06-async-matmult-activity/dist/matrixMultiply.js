import { nColumns, nRows } from './matrices';
// Function to multiply two matrices
export default function matrixMultiply(a, b) {
    var aRows = nRows(a);
    var aColumns = nColumns(a);
    var bRows = nRows(b);
    var bColumns = nColumns(b);
    if (aColumns !== bRows) {
        throw new Error("Incompatible matrix dimensions");
    }
    // Resultant matrix will have dimensions of aRows x bColumns
    // Initialize result matrix with zeros
    var result = Array.from({ length: aRows }, function () { return Array(bColumns).fill(0); });
    for (var i = 0; i < aRows; i++) {
        for (var j = 0; j < bColumns; j++) {
            for (var k = 0; k < aColumns; k++) {
                var addend = a[i][k] * b[k][j];
                result[i][j] += addend;
            }
        }
    }
    return result;
}
