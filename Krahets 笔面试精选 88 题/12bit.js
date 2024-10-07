//69 191. 位1的个数
var hammingWeight = function (n) {
    let count = 0;
    //method 1
    // const binary = n.toString(2);
    //
    // for (let i = 0; i < binary.length; i++) {
    //     if (Number(binary[i]) === 1) count += 1;
    // }
    // return count;

    //method 2
    for (let i = 1; i <= n; i = i * 2) {
        if (i & n) count += 1;
    }
    return count;
};
const n191 = 11;
const hammingWeightRS = hammingWeight(n191);
console.log(hammingWeightRS);

//70 231. 2 的幂
var isPowerOfTwo = function (n) {
    return n > 0 && (n & (n - 1)) === 0;
};

const n231 = 16;
const isPowerOfTwoRS = isPowerOfTwo(n231);
console.log(isPowerOfTwoRS);

//71 371. 两整数之和
console.log('No.371. 两整数之和');
var getSum = function (a, b) {
    while (b != 0) {
        const tmp = (a & b) << 1;
        a = a ^ b;
        b = tmp;
    }
    return a;
};
const a371 = 2,
    b371 = 11;
const getSumRS = getSum(a371, b371);
console.log(getSumRS);
/**
console.log(1 & 1, 0 & 0, 1 || 0);

console.log((a371 & b371) << 1);
console.log(a371 ^ b371);

a 0010;2
b 1011;11

^ 1001;9
& 0100;4

^ 1101
& 0
*/

//72 136. 只出现一次的数字
var singleNumber = function (nums) {
    const UniqueNum = new Set();
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (UniqueNum.has(nums[i])) {
            UniqueNum.delete(nums[i]);
        } else {
            UniqueNum.add(nums[i]);
            sum += nums[i];
        }
    }
    return [...UniqueNum][0];
};

const nums136 = [-2, -2, 1];
const singleNumberRS = singleNumber(nums136);
console.log(singleNumberRS);

console.log(2 & 2 & 2);
console.log(3);

//73 137. 只出现一次的数字 II
console.log('No.73 137. 只出现一次的数字 II');
var singleNumber2 = function (nums) {
    const uniqueNum = new Map();
    nums.forEach((num) => {
        let count = 0;
        if (uniqueNum.get(num)) {
            count = uniqueNum.get(num) + 1;
        } else count = 1;
        uniqueNum.set(num, count);
    });

    for (const [i, v] of uniqueNum) {
        if (v === 1) return i;
    }
    return false;
};

const nums73 = [2, 2, 3, 2];
const singleNumber2RS = singleNumber2(nums73);
console.log(singleNumber2RS);
