function knapsackDFS(wgt, val, i, c) {
    //选完所有物品或背包无剩余容量，则返回价值0
    if (i === 0 || c === 0) {
        return 0;
    }

    //若超过背包容量，只能不放入背包
    if (wgt[i - 1] > c) {
        return knapsackDFS(wgt, val, i - 1, c);
    }
    //计算不放入和放入物品i的最大价值
    const no = knapsackDFS(wgt, val, i - 1, c);
    const yes = knapsackDFS(wgt, val, i - 1, c - wgt[i - 1]) + val[i - 1];

    //返回两种方案中价值更大的那个
    return Math.max(no, yes);
}

function knapsackDFSMem(wgt, val, mem, n, cap) {
    if (n === 0 || cap === 0) {
        return 0;
    }

    if (mem[n][cap] !== -1) return mem[n][cap];

    //若超过背包容量，只能不放入背包
    if (wgt[n - 1] > cap) {
        return knapsackDFSMem(wgt, val, mem, n - 1, cap);
    }

    //计算不放入物品i的最大价值
    const no = knapsackDFSMem(wgt, val, mem, n - 1, cap);
    const yes =
        knapsackDFSMem(wgt, val, mem, n - 1, cap - wgt[n - 1]) + val[n - 1];

    mem[n][cap] = Math.max(yes, no);
    return mem[n][cap];
}

function knapsackDP(wgt, val, n, cap) {
    //初始化DP
    const dp = Array(n + 1)
        .fill(0)
        .map(() => Array(cap + 1).fill(0));

    //状态转移
    for (let i = 1; i <= n; i++) {
        for (let c = 1; c <= cap; c++) {
            if (wgt[i - 1] > c) {
                //超过背包容量，不选物品
                dp[i][c] = dp[i - 1][c];
            } else {
                //选和不选物品i这两种方案的较大值
                dp[i][c] = Math.max(
                    dp[i - 1][c],
                    dp[i - 1][c - wgt[i - 1]] + val[i - 1]
                );
            }
        }
    }
    // console.log(dp);
    return dp[n][cap];
}

function knapsackDPComp(wgt, val, n, cap) {
    //初始化dp表
    const dp = Array(cap + 1).fill(0);

    for (let i = 1; i <= n; i++) {
        //倒序遍历
        for (let c = cap; c >= 1; c--) {
            if (wgt[i - 1] <= c) {
                dp[c] = Math.max(dp[c], dp[c - wgt[i - 1]] + val[i - 1]);
            }
        }
    }
    return dp[cap];
}
/* Driver Code */
// const wgt = [10, 20, 30, 40, 50];
// const val = [50, 120, 150, 210, 240];

const wgt = [1, 2, 3];
const val = [50, 120, 150];
const cap = 4;
const n = wgt.length;

// 暴力搜索
let res = knapsackDFS(wgt, val, n, cap);
console.log(`1.暴力搜索 不超过背包容量的最大物品价值为 ${res}`);

// 记忆化搜索
const mem = Array.from({ length: n + 1 }, () =>
    Array.from({ length: cap + 1 }, () => -1)
);
res = knapsackDFSMem(wgt, val, mem, n, cap);
console.log(`2.记忆化搜索 不超过背包容量的最大物品价值为 ${res}`);

// // 动态规划
res = knapsackDP(wgt, val, n, cap);
console.log(`3.动态规划 不超过背包容量的最大物品价值为 ${res}`);

// 状态压缩后的动态规划
res = knapsackDPComp(wgt, val, n, cap);
console.log(`4.状态压缩后的动态规划 不超过背包容量的最大物品价值为 ${res}`);
