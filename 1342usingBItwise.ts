export {};

function numberOfSteps(num: number): number {
  let steps = 0;

  for (; num > 0; ) {
    if ((num & 1) === 0) {
      num >>= 1;
    } else {
      num -= 1;
    }
    steps++;
  }

  return steps;
}

console.log(numberOfSteps(14));

// time complexity: O(logn)
// space complexity: O(1)
