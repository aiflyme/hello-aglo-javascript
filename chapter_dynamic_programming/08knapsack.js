function knapsackDFS(wgt, val, i, c) {
    //选完所有物品或背包无剩余容量，则返回价值0
    if (i === 0 || c === 0) {
        return 0;
    }

    //不能超过背包容量
    if (wgt[i - 1] > c) {
        return knapsackDFS(wgt, val, i - 1, c);
    }

    //计算不放入和放入物品n是最大价值
    const no = knapsackDFS(wgt, val, i - 1, c);
    const yes = knapsackDFS(wgt, val, i - 1, c - wgt[i - 1]) + val[i - 1];
    return Math.max(no, yes);
}

function knapsackDFSMem(wgt, val, mem, n, cap) {}

/* Driver Code */
const wgt = [10, 20, 30, 40, 50];
const val = [50, 120, 150, 210, 240];
const cap = 50;
const n = wgt.length;

// 暴力搜索
let res = knapsackDFS(wgt, val, n, cap);
console.log(`不超过背包容量的最大物品价值为 ${res}`);

// // 记忆化搜索
// const mem = Array.from({ length: n + 1 }, () =>
//     Array.from({ length: cap + 1 }, () => -1)
// );
// res = knapsackDFSMem(wgt, val, mem, n, cap);
// console.log(`不超过背包容量的最大物品价值为 ${res}`);

// // 动态规划
// res = knapsackDP(wgt, val, cap);
// console.log(`不超过背包容量的最大物品价值为 ${res}`);

// // 状态压缩后的动态规划
// res = knapsackDPComp(wgt, val, cap);
// console.log(`不超过背包容量的最大物品价值为 ${res}`);
