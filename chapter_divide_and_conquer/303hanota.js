function move(src, tar) {
    const pan = src.pop();
    tar.push(pan);
}

function solveHanota(n, src, buf, tar) {
    if (n === 1) {
        move(src, tar);
        return;
    }

    solveHanota(n - 1, src, tar, buf);
    move(src, tar);
    solveHanota(n - 1, buf, src, tar);
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

solveHanota(A.length, A, B, C);

console.log('圆盘移动完成后：');
console.log(`A = ${JSON.stringify(A)}`);
console.log(`B = ${JSON.stringify(B)}`);
console.log(`C = ${JSON.stringify(C)}`);
