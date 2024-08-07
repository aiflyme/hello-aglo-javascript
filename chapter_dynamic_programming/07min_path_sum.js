//暴力搜索
function minPathSumDFS(grid, n, m) {
    if (n === 0 && m === 0) {
        return grid[0][0];
    }

    //越界 返回Infinity
    if (n < 0 || m < 0) return Infinity;

    const up = minPathSumDFS(grid, n - 1, m);
    const left = minPathSumDFS(grid, n, m - 1);
    return Math.min(up, left) + grid[n][m];
}

//记忆搜索
function minPathSumDFSMem(grid, mem, n, m) {
    if (n === 0 && m === 0) {
        return grid[0][0];
    }

    //越界 返回Infinity
    if (n < 0 || m < 0) return Infinity;

    if (mem[n][m] !== -1) return men[n][m];

    const up = minPathSumDFS(grid, n - 1, m);
    const left = minPathSumDFS(grid, n, m - 1);
    return Math.min(up, left) + grid[n][m];
}

//动态规划
function minPathSumDP(gird, n, m, dp) {
    dp[0][0] = grid[0][0];

    //状态转移 首行
    for (let i = 1; i < m; i++) {
        dp[0][i] = dp[0][i - 1] + grid[0][i];
    }
    //状态转移 首列
    for (let j = 1; j < n; j++) {
        dp[j][0] = dp[j - 1][0] + grid[j][0];
    }

    //状态转移，其余行和列
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
        }
    }

    return dp[n - 1][m - 1];
}

//动态规划
function minPathSumDPComp(gird, n, m) {
    const dp = Array(m);

    dp[0] = grid[0][0];

    //状态转移 首行
    for (let i = 1; i < m; i++) {
        dp[i] = dp[i - 1] + grid[0][i];
    }

    //状态转移，其余行
    for (let i = 1; i < n; i++) {
        //首列
        dp[0] = dp[0] + grid[i][0];
        for (let j = 1; j < m; j++) {
            dp[j] = Math.min(dp[j], dp[j - 1]) + grid[i][j];
        }
    }

    return dp[m - 1];
}

/* Driver Code */
const grid = [
    [1, 3, 1, 5],
    [2, 2, 4, 2],
    [5, 3, 2, 1],
    [4, 3, 5, 2],
];
const n = grid.length,
    m = grid[0].length;
// 暴力搜索
let res = minPathSumDFS(grid, n - 1, m - 1);
console.log(`从左上角到右下角的最小路径和为 ${res}`);

// 记忆化搜索
const mem = Array.from({ length: n }, () =>
    Array.from({ length: m }, () => -1)
);
res = minPathSumDFSMem(grid, mem, n - 1, m - 1);
console.log(`从左上角到右下角的最小路径和为 ${res}`);

// 动态规划
const dp = Array.from({ length: n }, () => Array.from({ length: m }, () => 0));
res = minPathSumDP(grid, n, m, dp);
console.log(`从左上角到右下角的最小路径和为 ${res}`);

// 状态压缩后的动态规划
res = minPathSumDPComp(grid, n, m);
console.log(`从左上角到右下角的最小路径和为 ${res}`);
