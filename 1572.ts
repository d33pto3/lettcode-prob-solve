export {};

function diagonalSum(mat: number[][]): number {
  let sum = 0;

  for (let i = 0; i < mat.length; i++) {
    sum += mat[i][i];
    if (i != mat.length - i - 1) {
      sum += mat[i][mat.length - i - 1];
    }
  }
  return sum;
}

console.log(
  diagonalSum([
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
  ])
);
