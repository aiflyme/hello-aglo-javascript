function backtrack(choices, state, res, n) {
    if (state === n) {
        res[0]++; //.set(0, res.get(0) + 1);
    }

    choices.forEach((i) => {
        if (i + state <= n) {
            backtrack(choices, state + i, res, n);
        }
    });
}

function climbingStairsBacktrack(n) {
    const res = Array(1).fill(0); //new Map(); // 可选择向上爬 1 阶或 2 阶
    const state = 0;
    const choices = [1, 2];
    //res.set(0, 0);
    backtrack(choices, state, res, n);
    return res; //.get(0);
}

/* Driver Code */
const n = 9;
const res = climbingStairsBacktrack(n);
console.log(`爬 ${n} 阶楼梯共有 ${res} 种方案`);
