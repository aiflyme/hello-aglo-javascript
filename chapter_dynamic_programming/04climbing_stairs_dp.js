function climbingStairsDPComp(n) {
    if (n === 1 || n === 2) return 2;

    const dp = new Array(n + 1).fill(-1);

    let a = 1,
        b = 2;

    for (let i = 3; i <= n; i++) {
        //dp[i] = dp[i - 1] + dp[i - 2];
        let tmp = b;
        b = a + b;
        a = tmp;
    }
    return b;
}

function climbingStairsDP(n) {
    if (n === 1 || n === 2) return 2;

    const dp = new Array(n + 1).fill(-1);

    dp[1] = 1;
    dp[2] = 2;

    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}

/* Driver Code */
const n = 9;
let res = climbingStairsDP(n);
console.log(`爬 ${n} 阶楼梯共有 ${res} 种方案`);
res = climbingStairsDPComp(n);
console.log(`爬 ${n} 阶楼梯共有 ${res} 种方案`);
