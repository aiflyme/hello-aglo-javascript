function backtrack(row, n, state, res, cols, diags1, diags2) {
    if (row === n) {
        res.push(state.map((row) => row.slice()));
        return;
    }

    //遍历所有列
    for (let col = 0; col < n; col++) {
        //计算对角线
        const diag1 = row - col;
        const diag2 = row + col;

        if (!cols[col] && !diags1[diag1] && !diags2[diag2]) {
            //尝试 把皇后放置在该格子
            state[row][col] = 'Q';
            cols[col] = diags1[diag1] = diags2[diag2] = true;

            //放置下一行
            backtrack(row + 1, n, state, res, cols, diags1, diags2);

            //回退
            state[row][col] = '#';
            cols[col] = diags1[diag1] = diags2[diag2] = false;
        }
    }
}

function nQueens(n) {
    //初始化 n * n 棋盘，Q表示皇后，#表示空位
    const state = Array.from({ length: n }, () => Array(n).fill('#'));
    const cols = Array(n).fill(false);
    const diags1 = Array(2 * n - 1).fill(false);
    const diags2 = Array(2 * n - 1).fill(false);
    const res = [];
    backtrack(0, n, state, res, cols, diags1, diags2);
    return res;
}

// Driver Code
const n = 5;
const res = nQueens(n);

console.log(`输入棋盘长宽为 ${n}`);
console.log(`皇后放置方案共有 ${res.length} 种`);
res.forEach((state) => {
    console.log('--------------------');
    state.forEach((row) => console.log(row));
});
