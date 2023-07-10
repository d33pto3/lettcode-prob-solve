"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function diagonalSum(mat) {
    var sum = 0;
    for (var i = 0; i < mat.length; i++) {
        sum += mat[i][i];
        if (i != mat.length - i - 1) {
            sum += mat[i][mat.length - i - 1];
        }
    }
    return sum;
}
console.log(diagonalSum([
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
]));
