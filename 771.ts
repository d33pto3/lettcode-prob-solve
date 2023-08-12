function numJewelsInStones(jewels: string, stones: string): number {
  let count = 0;
  for (let i = 0; i <= jewels.length - 1; i++) {
    for (let j = 0; j <= stones.length - 1; j++) {
      if (jewels[i] === stones[j]) {
        count++;
      }
    }
  }
  return count++;
}

// with split

// function numJewelsInStonesWithSplit(jewels: string, stones: string): number {
//   }

console.log(numJewelsInStones("aA", "aAAbbbb"));
