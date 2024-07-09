function dfs(nums, target, i, j) {
    if (i > j) return -1;
    const m = Math.floor((i + j) / 2);
    if (target > nums[m]) {
        return dfs(nums, target, m + 1, j);
    } else if (target < nums[m]) {
        return dfs(nums, target, i, m - 1);
    } else {
        return m;
    }
}

function binarySearch(nums, target) {
    const j = nums.length - 1;
    i = 0;

    const index = dfs(nums, target, i, j);
    return index;
}

/* Driver Code */
const target = 6;
const nums = [1, 3, 6, 8, 12, 15, 23, 26, 31, 35];
// 二分查找（双闭区间）
const index = binarySearch(nums, target);
console.log(`目标元素 6 的索引 = ${index}`);
