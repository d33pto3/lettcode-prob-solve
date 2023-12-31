export {};

function numberOfSteps(num: number): number {
  let steps = 0;

  for (; num > 0; ) {
    if (num % 2 === 0) {
      num /= 2;
    } else {
      num -= 1;
    }
    steps++;
  }

  return steps;
}
