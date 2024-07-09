// 二分查找
function binarySearch(nums, target) {
    //初始化双闭区间[0,n-1], 即i，j分别指向数组首元素，尾元素
    let i = 0,
        j = nums.length - 1;
    //循环，当搜索区间为空时跳出（i>j时为空）
    while (i <= j) {
        //计算中点索引m,parseInt()向下取整数
        let m = parseInt(i + (j - i) / 2);
        if (target === nums[m]) return m;
        else if (target > nums[m]) i = m + 1;
        else j = m - 1;
    }
    return -1;
}

// 二分查找（左闭右开区间）
function binarySearchLCRO(nums, target) {
    // 初始化左闭右开区间[0,n),即i，j分别指向数组首元素，尾元素+1
    let i = 0,
        j = nums.length;
    while (i < j) {
        const m = parseInt(i + (j - i) / 2);
        if (target === nums[m]) return m;
        else if (target > nums[m]) i = m + 1;
        else j = m;
    }
    return -1;
}

/* Driver Code */
const target = 6;
const nums = [1, 3, 6, 8, 12, 15, 23, 26, 31, 35];

let index = binarySearch(nums, target);
console.log('目标元素 6 的索引 = ' + index);

index = binarySearchLCRO(nums, target);
console.log('目标元素 6 的索引 = ' + index);
