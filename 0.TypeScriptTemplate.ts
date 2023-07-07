export {};
/* 
  Having a glitch due to legacy script files:
  
  The error describing "duplicatte function implementation" in typescript,
  If we have only a single definition for the function in the file, we can add the 'export {}' line to our file to make it an ES Module

  ex: 
  ///starts 
  function sum() {}
  
  exportt {};[make files ES Module]
  /// ends

  Withtout the export statement, TS tries to merge varibale and function declarations with the same name accross files. This can lead to conflicts and duplication errors. The empty export acts as a barrier preventing merging and ensures that each declaration remains distinct within its moddule.
*/

function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}

console.log(twoSum([3, 3], 6));
