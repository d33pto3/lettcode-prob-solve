function removeElement(nums: number[], val: number): number {
  for (let i = 0; i <= nums.length - 1; i++) {
    if (nums[i] == val) {
      nums.splice(i, 1);
      console.log(nums);
    }
  }
  return nums.length;
}

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
