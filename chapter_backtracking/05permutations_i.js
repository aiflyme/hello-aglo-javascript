function backtrack(state, choices, selected, res) {
    //是否为解
    if (state.length === choices.length) {
        //记录解
        res.push([...state]);
        return;
    }

    for (let i = 0; i < choices.length; i++) {
        //剪枝，是否合法
        if (!selected[i]) {
            //尝试
            state.push(choices[i]);
            selected[i] = true;
            //下一轮选择
            backtrack(state, choices, selected, res);
            //回退
            selected[i] = false;
            state.pop();
        }
    }
}

function permutationsI(nums) {
    const res = [];
    backtrack([], nums, Array(nums.length).fill(false), res);
    return res;
}

// Driver Code
const nums = [1, 2, 3];
const res = permutationsI(nums);

console.log(`输入数组 nums = ${JSON.stringify(nums)}`);
console.log(`所有排列 res = ${JSON.stringify(res)}`);
