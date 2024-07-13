function climbingStairsConstraintDP(n) {
    if (n === 1 || n === 2) return 1;

    //初始化DP表，用于存储子问题的解
    const dp = Array.from(new Array(n + 1), () => new Array(3));
    //初始状态，预设最小子问题的解
    dp[1][1] = 1;
    dp[1][2] = 0;
    dp[2][1] = 0;
    dp[2][2] = 1;

    for (let i = 3; i <= n; i++) {
        dp[i][1] = dp[i - 1][2];
        dp[i][2] = dp[i - 2][1] + dp[i - 2][2];
    }
    return dp[n][1] + dp[n][2];
}

/* Driver Code */
const n = 9;
const res = climbingStairsConstraintDP(n);
console.log(`爬 ${n} 阶楼梯共有 ${res} 种方案`);
