//74 238. 除自身以外数组的乘积
var productExceptSelf = function (nums) {
    const answer = Array(nums.length).fill(1);
    console.log(nums);
    for (let i = 1; i < nums.length; i++) {
        answer[i] = nums[i - 1] * answer[i - 1];
    }
    console.log(answer);
    let tmp = 1;
    for (let j = nums.length - 2; j >= 0; j--) {
        tmp *= nums[j + 1];
        answer[j] *= tmp;
    }
    return answer;
};

const nums74 = [1, 2, 3, 4];
const productExceptSelfRS = productExceptSelf(nums74);
console.log(productExceptSelfRS);

//75 169. 多数元素
var majorityElement = function (nums) {
    //method 1
    // const n = nums.length,
    //     halfN = n / 2,
    //     mutilNum = new Map();
    // if (n === 1) return nums[0];
    // for (let i = 0; i < n; i++) {
    //     if (mutilNum.get(nums[i])) {
    //         const tmp = mutilNum.get(nums[i]);
    //         mutilNum.set(nums[i], tmp + 1);
    //         if (tmp + 1 > halfN) return nums[i];
    //     } else mutilNum.set(nums[i], 1);
    // }
    // //const arr = Array.from(mutilNum.index());
    // return 0; //arr[0];

    //method 2
    const n = nums.length;
    let votes = 0,
        x = nums[0];
    for (let i = 0; i < n; i++) {
        if (votes === 0) {
            x = nums[i];
        }
        if (x !== nums[i]) {
            votes--;
        } else votes++;
    }
    return x;
};
const nums75 = [5];
const majorityElementRS = majorityElement(nums75);
console.log(majorityElementRS);

//76 343. 整数拆分
console.log('76 343. 整数拆分');
var integerBreak = function (n) {
    if (n <= 3) return n - 1;

    const a = Math.floor(n / 3),
        remainder = n % 3;
    console.log(a, remainder);
    if (remainder === 0) return Math.pow(3, a);
    else if (remainder === 1) return Math.pow(3, a - 1) * (3 + remainder);
    else return Math.pow(3, a) * remainder;
};
const n76 = 10;
const integerBreakRS = integerBreak(n76);
console.log(integerBreakRS);

// console.log(Math.floor(Math.sqrt(10)));
