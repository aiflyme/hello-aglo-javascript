/* 完全背包：动态规划 */
function unboundedKnapsackDP(wgt, val, n, cap) {
    const dp = Array(n + 1)
        .fill(0)
        .map(() => Array(cap + 1).fill(0));
    for (let i = 1; i <= n; i++) {
        for (let c = 1; c <= cap; c++) {
            if (wgt[i - 1] > c) {
                dp[i][c] = dp[i - 1][c];
            } else {
                dp[i][c] = Math.max(
                    dp[i - 1][c],
                    dp[i][c - wgt[i - 1]] + val[i - 1]
                );
            }
        }
    }
    return dp[n][cap];
}

/* 完全背包：状态压缩后的动态规划 */
function unboundedKnapsackDPComp(wgt, val, n, cap) {
    const dp = Array(cap + 1).fill(0);

    for (let i = 1; i <= n; i++) {
        for (let c = 1; c <= cap; c++) {
            if (wgt[i - 1] <= c) {
                dp[c] = Math.max(dp[c], dp[c - wgt[i - 1]] + val[i - 1]);
            }
        }
    }
    return dp[cap];
}

/* Driver Code */
const wgt = [1, 2, 3];
const val = [5, 11, 15];
const cap = 4;
const n = wgt.length;
// 动态规划
res = unboundedKnapsackDP(wgt, val, n, cap);
console.log(`1.动态规划 不超过背包容量的最大物品价值为 ${res}`);

// 状态压缩后的动态规划
res = unboundedKnapsackDPComp(wgt, val, n, cap);
console.log(`2.状态压缩后的动态规划 不超过背包容量的最大物品价值为 ${res}`);
