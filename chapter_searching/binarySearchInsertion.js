function binarySearchInsertion(nums, target) {
    let i = 0,
        j = nums.length - 1;

    while (i <= j) {
        const m = Math.floor(i + (j - i) / 2);
        if (target < nums[m]) j = m - 1;
        else if (target > nums[m]) i = m + 1;
        else j = m - 1; // 向右找则是  i = m+1;
    }
    return i;
}

const target = 15;
//const nums = [1, 3, 6, 8, 12, 15, 23, 26, 31, 35];
const nums = [1, 3, 6, 8, 12, 15, 23, 23, 23, 26, 31, 35];

let index = binarySearchInsertion(nums, target);
console.log('目标元素 15 的索引 = ' + index);

module.exports = {
    binarySearchInsertion,
};
