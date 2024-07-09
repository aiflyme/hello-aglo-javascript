const { binarySearchInsertion } = require('./binarySearchInsertion.js');

function binarySearchEdge(nums, target) {
    const i = binarySearchInsertion(nums, target);
    if (i === nums.length || nums[i] !== target) {
        return -1;
    }
    return i;
}

function binarySearchLeftEdge(nums, target) {
    const i = binarySearchInsertion(nums, target - 1);
    const j = i;
    if (j === -1 || nums[j] !== target) {
        return -1;
    }
    return j;
}

function binarySearchRightEdge(nums, target) {
    const i = binarySearchInsertion(nums, target + 1);
    const j = i - 1;
    if (j === -1 || nums[j] !== target) {
        return -1;
    }
    return j;
}

const target = 23;
const nums = [1, 3, 6, 8, 12, 15, 23, 23, 23, 26, 31, 35];

let index = binarySearchEdge(nums, target);
console.log('目标元素 23 的索引 = ' + index);

index = binarySearchLeftEdge(nums, target);
console.log('e最左一个元素 ' + target + ' 的索引为 ' + index);
index = binarySearchRightEdge(nums, target);
console.log('e最右一个元素 ' + target + ' 的索引为 ' + index);
