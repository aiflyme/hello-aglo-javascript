//32 704. 二分查找
var search = function (nums, target) {
    let i = 0,
        j = nums.length - 1;

    while (i < j) {
        mid = Math.floor((i + j) / 2);
        if (target < nums[mid]) j = mid - 1;
        else if (target > nums[mid]) i = mid + 1;
        else return mid;
    }
    return -1;
};

const nums = [-1, 0, 3, 5, 9, 12],
    target = 9;
// const nums = [5],
// target = 5;
const searchs = search(nums, target);
console.log(searchs);

//33 278. 第一个错误的版本
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        let i = 0,
            j = n - 1;
        while (i <= j) {
            mid = Math.floor(i + (j - i) / 2);
            if (target < nums[mid]) j = mid - 1;
            else i = mid + 1;
        }
        return i;
    };
};
const solutions = solution(4)(5);
console.log(solutions);

//34 724. 寻找数组的中心下标
let nums34 = [1, 7, 3, 6, 5, 6];
// nums34 = [1, 2, 3];
// nums34 = [2, 1, -1];
//nums34 = [-1, -1, -1, -1, -1, -1];
var pivotIndex = function (nums) {
    let sumLeft = 0,
        sumRight = nums.reduce((acc, val) => acc + val);

    for (let k = 0; k < nums.length; k++) {
        sumRight -= nums[k];
        if (sumLeft === sumRight) return k;
        sumLeft += nums[k];
    }

    return -1;
};
const pivotIndexs = pivotIndex(nums34);
console.log('No.34:', pivotIndexs);

//35 287. 寻找重复数
let nums35 = [1, 3, 4, 2, 2];
// nums35 = [3, 1, 3, 4, 2];
// nums35 = [3, 3, 3, 3, 3];
// var findDuplicate = function (nums) {
//     const arr = [];
//     for (val of nums) {
//         if (arr[val]) return val;
//         else arr[val] = 1;
//     }
//     return -1;
// };

var findDuplicate = function (nums) {
    let left = 1,
        right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        console.log(mid);

        let count = 0;
        for (num of nums) {
            if (num <= mid) {
                count++;
            }
        }

        if (count > mid) right = mid;
        else {
            left = mid + 1;
        }
    }
    return left;
};
const findDuplicates = findDuplicate(nums35);
console.log('No.35:', findDuplicates);
