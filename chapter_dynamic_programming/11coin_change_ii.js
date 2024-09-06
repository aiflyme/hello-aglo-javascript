/* 零钱兑换 II：动态规划 */
function coinChangeIIDP(coins, amt, n) {
    const dp = Array.from({ length: n + 1 }, () =>
        Array.from({ length: amt + 1 }, () => 0)
    );

    for (let i = 0; i <= n; i++) {
        dp[i][0] = 1;
    }

    //状态转移
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= amt; j++) {
            if (coins[i - 1] > j) {
                dp[i][j] = dp[i - 1][j];
            } else {
                dp[i][j] = dp[i - 1][j] + dp[i][j - coins[i - 1]];
            }
        }
    }
    console.log(dp);
    return dp[n][amt];
}

/* 零钱兑换 II：状态压缩后的动态规划 */
function coinChangeIIDPComp(coins, amt, n) {
    const dp = Array(amt + 1).fill(0);

    dp[0] = 1;

    //状态转移
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= amt; j++) {
            if (coins[i - 1] <= j) {
                dp[j] = dp[j] + dp[j - coins[i - 1]];
            }
        }
    }
    console.log(dp);
    return dp[amt];
}

/* Driver Code */
const coins = [1, 2, 5];
const amt = 5;
const n = coins.length;

// 动态规划

let res = coinChangeIIDP(coins, amt, n);
console.log(`凑出目标金额的硬币组合数量为 ${res}`);

// 状态压缩后的动态规划
res = coinChangeIIDPComp(coins, amt, n);
console.log(`凑出目标金额的硬币组合数量为 ${res}`);
