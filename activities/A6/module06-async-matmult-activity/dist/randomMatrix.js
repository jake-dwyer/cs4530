// Function to generate a random matrix of given dimensions
// Generates a square matrix of size n x n
export default function randomMatrix(size) {
    var matrix = [];
    for (var i = 0; i < size; i++) {
        var row = [];
        for (var j = 0; j < size; j++) {
            row.push(Math.floor((Math.random() - 0.5) * 10)); // Random integer between -5 and 5
        }
        matrix.push(row);
    }
    return matrix;
}
