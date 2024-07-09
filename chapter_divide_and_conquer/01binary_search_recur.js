function dfs(nums, target, i, j) {
    if (i > j) return -1;

    // count mid index
    const m = i + ((j - i) >> 1);
    if (nums[m] < target) return dfs(nums, target, m + 1, j);
    else if (nums[m] > target) return dfs(nums, target, i, m - 1);
    else return m;
}

function binarySearch(nums, target) {
    const n = nums.length - 1;
    return dfs(nums, target, 0, n);
}

/* Driver Code */
const target = 6;
const nums = [1, 3, 6, 8, 12, 15, 23, 26, 31, 35];
// 二分查找（双闭区间）
const index = binarySearch(nums, target);
console.log(`目标元素 6 的索引 = ${index}`);
