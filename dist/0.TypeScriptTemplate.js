"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

function twoSum(nums, target) {
  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}
console.log(twoSum([3, 3], 6));
