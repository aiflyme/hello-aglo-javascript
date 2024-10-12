//55 509. 斐波那契数
var fib = function (n) {
    //DP method
    /** 
    if (n === 0 || n === 1) return n;
    //const dp = [];
    let a = 0;
    let b = 1;
    for (let i = 2; i <= n; i++) {
        const tmp = b;
        b = a + b;
        a = tmp;
        //dp[i] = dp[i - 1] + dp[i - 2];
    }
    return b; //dp[n];
    */

    //method 2
    const mem = new Array(n + 1).fill(-1);
    const dfs = (n, mem) => {
        if (n === 0 || n === 1) return n;
        if (mem[n] != -1) return mem[n];
        mem[n] = dfs(n - 1, mem) + dfs(n - 2, mem);
        return mem[n];
    };
    return dfs(n, mem);
};
const n55 = 4;
const fibRS = fib(n55);
console.log(fibRS);

//56 70. 爬楼梯
var climbStairs = function (n) {
    if (n === 1 || n === 2) return n;
    //method 1
    // const dp = [];
    // dp[1] = 1;
    // dp[2] = 2;

    // for (let i = 3; i <= n; i++) {
    //     dp[i] = dp[i - 1] + dp[i - 2];
    // }
    // return dp[n];

    //method 2
    let a = 1,
        b = 2;
    // let a,b;
    for (let i = 3; i <= n; i++) {
        const tmp = b;
        b = a + b;
        a = tmp;
    }
    return b;
};
const climbStairsRS = climbStairs(1);
console.log(climbStairsRS);

//57 1480. 一维数组的动态和
var runningSum = function (nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        nums[i] = sum;
    }
    return nums;
};
const nums57 = [1, 2, 3, 4];
const runningSumRS = runningSum(nums57);
console.log(runningSumRS);

//58 121. 买卖股票的最佳时机
var maxProfit = function (prices) {
    let profit = 0,
        cost = prices[0];
    for (let i = 0; i < prices.length; i++) {
        cost = Math.min(cost, prices[i]);
        profit = Math.max(profit, prices[i] - cost);
        //console.log(profit, cost);
    }
    return profit;
};
const arr58 = [7, 1, 5, 3, 6, 4];
const maxProfitRS = maxProfit(arr58);
console.log(maxProfitRS);

//59 64. 最小路径和
var minPathSum = function (grid) {
    const dp = new Array(grid[0].length - 1);

    dp[0] = grid[0][0];
    //第一行
    for (let j = 1; j < grid[0].length; j++) {
        dp[j] = grid[0][j] + dp[j - 1];
    }
    console.log(dp);
    //移动行
    for (let i = 1; i < grid.length; i++) {
        dp[0] = grid[i][0] + dp[0];
        for (let j = 1; j < grid[0].length; j++) {
            dp[j] = Math.min(dp[j - 1], dp[j]) + grid[i][j];
        }
    }
    console.log(dp);
    return dp[grid[0].length - 1];
};
const grid59 = [
    [1, 3, 1],
    [2, 5, 1],
    [4, 2, 1],
];
const minPathSumRS = minPathSum(grid59);
console.log(minPathSumRS);

//60 53. 最大子数组和
console.log('No.60 53. 最大子数组和');
var maxSubArray = function (nums) {
    let sum = 0,
        j = nums.length - 1,
        maxSum = nums[0];

    for (let i = 0; i <= j; i++) {
        if (sum > 0) sum += nums[i];
        else sum = nums[i];
        maxSum = Math.max(maxSum, sum);
    }
    return maxSum;
};
const nums60 = [1, 2, -1, -2, 2, 1, -2, 1, 4, -5, 4]; //[-2, 1, -3, 4, -1, 2, 1, -5, 4];
const maxSubArrayRS = maxSubArray(nums60);
console.log(maxSubArrayRS);

//61 198. 打家劫舍
console.log('No.61 198. 打家劫舍');

var rob = function (nums) {
    const dp = new Array(nums.length).fill(0);
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);

    for (let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
    }
    return dp[nums.length - 1];
};
const nums61 = [2, 7, 9, 3, 1];
const robRS = rob(nums61);
console.log(robRS);

//62 213. 打家劫舍II
console.log('No.62 213. 打家劫舍II');
var rob = function (nums) {
    //method 1
    // const dp = new Array(nums.length).fill(0);
    // dp[0] = nums[0];
    // dp[1] = Math.max(nums[0], nums[1]);
    // const n = nums.length;
    // for (let i = 2; i < n; i++) {
    //     dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
    // }
    // if (n % 2 === 1) dp[n - 1] -= Math.min(nums[0], nums[n - 1]);
    // console.log(dp);
    // return Math.max(dp[n - 2], dp[n - 1]);

    //method 2
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    if (nums.length === 2) return Math.max(nums[0], nums[1]);
    const dp = new Array(nums.length - 1).fill(0),
        dp2 = new Array(nums.length - 1).fill(0),
        n = nums.length;

    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);

    for (let i = 2; i < nums.length - 1; i++) {
        dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
    }

    dp2[0] = nums[1];
    dp2[1] = Math.max(nums[2], nums[1]);
    console.log(dp, dp2);
    for (let j = 2; j < nums.length - 1; j++) {
        dp2[j] = Math.max(dp2[j - 2] + nums[j + 1], dp2[j - 1]);
    }
    console.log(dp, dp2);
    return Math.max(dp2[n - 2], dp[n - 2]);
};
const nums62 = [1, 2, 3, 1];
const rob2RS = rob(nums62);
console.log(rob2RS);

//63 300. 最长递增子序列
console.log('No.63 300. 最长递增子序列');
var lengthOfLIS = function (nums) {
    // const n = nums.length,
    //     dp = Array(n).fill(1);
    // dp[0] = 1;
    // let count = 0;
    // for (let i = 1; i < n; i++) {
    //     for (let j = 0; j < i; j++) {
    //         if (nums[i] > nums[j]) {
    //             dp[i] = Math.max(dp[j] + 1, dp[i]);
    //         }
    //         console.log(dp);
    //     }
    //     count = Math.max(dp[i], count);
    // }
    // return count;

    const n = nums.length,
        dp = Array(n).fill(1);
    dp[0] = 1;
    let count = 0;
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        console.log(dp);
    }
    return Math.max(...dp);
};
const nums63 = [10, 9, 2, 5, 3, 7, 101, 18];
const lengthOfLISRS = lengthOfLIS(nums63);
console.log(lengthOfLISRS);

//00 416. 分割等和子集
console.log('No. 416. 分割等和子集');
var canPartition = function (nums) {};
const nums00 = [2, 2, 1, 1];
const canPartitionRS = canPartition(nums00.sort((a, b) => a - b));
console.log(canPartitionRS);

//00 1137. 第 N 个泰波那契数
var tribonacci = function (n) {
    if (n === 0) return 0;
    if (n === 1 || n === 2) return 1;
    let a = 0,
        b = 1,
        c = 1;

    for (let i = 4; i <= n; i++) {
        const tmpA = b,
            tmpB = c;
        c = a + b + c;
        b = tmpB;
        a = tmpA;
    }
    return a + b + c;
};

const tribonacciRS = tribonacci(25);
console.log(tribonacciRS);

//00 746. 使用最小花费爬楼梯
console.log('00 746. 使用最小花费爬楼梯');
var minCostClimbingStairs = function (cost) {
    if (cost.length === 0) return 0;
    if (cost.length === 1) return cost[0];
    const n = cost.length;
    const dp = Array(cost.length + 1).fill(0);

    //
    dp[0] = cost[0];
    dp[1] = cost[1];

    for (let i = 2; i <= n; i++) {
        //dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
        dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i];
    }
    return Math.min(dp[n - 2], dp[n - 1]);
};

cost746 = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]; // [10, 15, 20];
const minCostClimbingStairsRS = minCostClimbingStairs(cost746);
console.log(minCostClimbingStairsRS);

//64 264. 丑数 II
console.log('NO.64 264. 丑数 II');
var nthUglyNumber = function (n) {
    if (n === 1) return 1;
    const dp = [],
        tmp = new Set(),
        arrs = [2, 3, 5];
    let i = 0;
    dp.push(1);

    while (i <= n) {
        if (dp[n - 1] > 0) break;
        if (tmp.size <= n) {
            arrs.forEach((arr) => {
                tmp.add(arr * dp[i]);
            });
        }
        dp.push(Math.min(...tmp));
        tmp.delete(Math.min(...tmp));
        i++;
    }
    console.log(tmp.size);
    return dp[n - 1];
};
const n64 = 7;
const nthUglyNumberRS = nthUglyNumber(n64);
console.log(nthUglyNumberRS);
