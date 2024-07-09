function backtrack(state, choices, target, res, start) {
    if (target === 0) {
        res.push([...state]);
        return;
    }

    for (let i = start; i < choices.length; i++) {
        //剪枝
        if (target - choices[i] < 0) {
            break;
        }
        //尝试，做出选择
        state.push(choices[i]);
        //下一轮开始
        backtrack(state, choices, target - choices[i], res, i);
        //回退
        state.pop();
    }
}

function subsetSumI(nums, target) {
    const res = [];
    nums.sort((a, b) => a - b); // 对 nums 进行排序
    const start = 0; // 遍历起始点

    backtrack([], nums, target, res, start);
    return res;
}

/* Driver Code */
const nums = [5, 4, 3];

const target = 9;
const res = subsetSumI(nums, target);
console.log(`输入数组 nums = ${JSON.stringify(nums)}, target = ${target}`);
console.log(`所有和等于 ${target} 的子集 res = ${JSON.stringify(res)}`);
