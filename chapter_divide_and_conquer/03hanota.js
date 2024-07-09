function move(src, tar) {
    const pan = src.pop();
    tar.push(pan);
}

function dfs(i, src, buf, tar) {
    if (i === 1) {
        move(src, tar);
        return;
    }

    dfs(i - 1, src, tar, buf);
    move(src, tar);

    dfs(i - 1, buf, src, tar);
}

function solveHanota(A, B, C) {
    const n = A.length;
    dfs(n, A, B, C);
}
/* Driver Code */
// 列表尾部是柱子顶部
const A = [5, 4, 3, 2, 1]; //
const B = [];
const C = [];
console.log('初始状态下：');
console.log(`A = ${JSON.stringify(A)}`);
console.log(`B = ${JSON.stringify(B)}`);
console.log(`C = ${JSON.stringify(C)}`);

solveHanota(A, B, C);

console.log('圆盘移动完成后：');
console.log(`A = ${JSON.stringify(A)}`);
console.log(`B = ${JSON.stringify(B)}`);
console.log(`C = ${JSON.stringify(C)}`);
