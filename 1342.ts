function numberOfSteps(num: number): number {
  let steps = 0;

  for (; num > 0; ) {
    if (num % 2 === 0) {
      steps++;
      num /= 2;
    } else {
      steps++;
      num -= 1;
    }
  }

  return steps;
}
