function coinChangeDP(coins, amt, n) {
    const dp = Array(n + 1)
        .fill(0)
        .map(() => Array(amt + 1).fill(0));

    if (dp[n][amt] >= amt + 1) return -1;
    //首行首列
    for (let i = 1; i <= amt; i++) {
        dp[0][i] = amt + 1;
    }

    //状态转移 其余行和列
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= amt; j++) {
            if (coins[i - 1] > j) {
                //超过目标金额，不选硬币i
                dp[i][j] = dp[i - 1][j];
            } else {
                dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - coins[i - 1]] + 1);
            }
        }
    }
    console.log(dp);
    return dp[n][amt] !== amt + 1 ? dp[n][amt] : -1;
}

function coinChangeDPComp(coins, amt, n) {
    const dp = Array(amt + 1).fill(amt + 1);
    dp[0] = 0;

    //状态转移 其余行和列
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= amt; j++) {
            if (coins[i - 1] <= j) {
                dp[j] = Math.min(dp[j], dp[j - coins[i - 1]] + 1);
            }
        }
    }
    console.log(dp);
    return dp[amt] !== amt + 1 ? dp[amt] : -1;
}

/* Driver Code */
const coins = [1, 2, 5];
const amt = 4;
const n = coins.length;

// 动态规划
let res = coinChangeDP(coins, amt, n);
console.log(`凑到目标金额所需的最少硬币数量为 ${res}`);

// 状态压缩后的动态规划
res = coinChangeDPComp(coins, amt, n);
console.log(`凑到目标金额所需的最少硬币数量为 ${res}`);
