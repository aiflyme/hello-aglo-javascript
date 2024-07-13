function dfs(n, mem) {
    if (n === 1 || n === 2) {
        return n;
    }
    const count = dfs(n - 1, mem) + dfs(n - 2, mem);
    mem[n] = count;
    return count;
}

function climbingStairsDFSMem(n) {
    const mem = new Array(n + 1).fill(-1);
    return dfs(n, mem);
}

/* Driver Code */
const n = 9;
const res = climbingStairsDFSMem(n);
console.log(`爬 ${n} 阶楼梯共有 ${res} 种方案`);
