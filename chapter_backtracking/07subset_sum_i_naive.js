function backtrack(state, choices, sum, target, res) {
    //是否为解
    if (sum === target) {
        //记录解
        res.push([...state]);
        return;
    }

    for (let i = 0; i < choices.length; i++) {
        //剪枝
        if (choices[i] + sum > target) {
            continue;
        }

        // 尝试：做出选择，更新元素和 total
        state.push(choices[i]);
        //下一轮选择
        backtrack(state, choices, choices[i] + sum, target, res);

        //回退
        state.pop();
    }
}

function subsetSumINaive(nums, target) {
    const res = [];
    const sum = 0;
    backtrack([], nums, sum, target, res);
    return res;
}

/* Driver Code */
const nums = [3, 4, 5];
const target = 9;
const res = subsetSumINaive(nums, target);
console.log(`输入数组 nums = ${JSON.stringify(nums)}, target = ${target}`);
console.log(`所有和等于 ${target} 的子集 res = ${JSON.stringify(res)}`);
console.log('请注意，该方法输出的结果包含重复集合');
