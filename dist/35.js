function searchInsert(nums, target) {
    var index = 0;
    if (target < nums[0])
        return 0;
    if (target > nums[nums.length - 1])
        return nums.length;
    for (var i = 0; i < nums.length; i++) {
        if (target == nums[i]) {
            index = i;
            continue;
        }
        if (target > nums[i] && target < nums[i + 1]) {
            index = i + 1;
            continue;
        }
    }
    return index;
}
console.log(searchInsert([1, 3, 5, 6], 7));
