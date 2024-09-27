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

//59 64. 最小路径和
var minPathSum = function (grid) {
    const dp = new Array(grid[0].length - 1);

    dp[0] = grid[0][0];
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
