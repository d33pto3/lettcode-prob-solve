export {};

function sumOddLengthSubarrays(arr: number[]): number {
  let sum = 0,
    count = 0,
    cot = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    count += arr[i];
    cot++;
    for (let j = i + 1; j < arr.length; j++) {
      count += arr[j];
      cot++;
      if (cot % 2 === 1) {
        sum += count;
      }
    }
    count = 0;
    cot = 0;
  }
  return sum;
}

console.log(sumOddLengthSubarrays([1, 2]));
