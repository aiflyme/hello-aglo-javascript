function dfs(n) {
    if (n === 1 || n === 2) {
        return n;
    }
    const count = dfs(n - 1) + dfs(n - 2);
    return count;
}

function climbingStairsDFS(n) {
    return dfs(n);
}

/* Driver Code */
const n = 9;
const res = climbingStairsDFS(n);
console.log(`爬 ${n} 阶楼梯共有 ${res} 种方案`);
