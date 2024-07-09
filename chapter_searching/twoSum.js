/* 方法一：暴力枚举 */
function twoSumBruteForce(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) return [i, j];
        }
    }
    return [];
}

function twoSumHashTable(nums, target) {
    let m = {};
    //console.log(typeof m); object
    for (let i = 0; i < nums.length; i++) {
        if (m[target - nums[i]] !== undefined) {
            return [m[target - nums[i]], i];
        } else m[nums[i]] = i;
    }
    return [];
}

nums = [2, 7, 11, 15];
target = 13;

let v = twoSumBruteForce(nums, target);
console.log(v);
v = twoSumHashTable(nums, target);
console.log(v);
