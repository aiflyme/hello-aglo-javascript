//43 104 二叉树的最大深度

//44 113. 路径总和 II

//45 46. 全排列
var permute = function (nums) {
    const res = [],
        state = [],
        selected = Array(nums.length).fill(false);

    const permutes = function (nums, state, res, selected) {
        if (nums.length === state.length) {
            res.push([...state]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (!selected[i]) {
                state.push(nums[i]);
                //同一个数不重复取
                selected[i] = true;
                permutes(nums, state, res, selected);

                //回溯
                selected[i] = false;
                state.pop();
            }
        }
    };
    permutes(nums, state, res, selected);
    return res;
};
const nums45 = [1, 2, 3];
const permuteRs = permute(nums45);
console.log(permuteRs);

//46 47. 全排列 II
var permuteUnique = function (nums) {
    const res = [],
        state = [],
        selected = Array(nums.length).fill(false);

    const permutes = function (nums, state, res, selected) {
        if (nums.length === state.length) {
            res.push([...state]);
            return;
        }

        const duplicated = new Set();
        for (let i = 0; i < nums.length; i++) {
            if (!selected[i] && !duplicated.has(nums[i])) {
                // console.log(duplicated.has[nums[i]]);
                state.push(nums[i]);
                //同一个数不重复取
                selected[i] = true;
                //不同位的同一个数字不重复
                duplicated.add(nums[i]);
                permutes(nums, state, res, selected);

                //回溯
                selected[i] = false;
                state.pop();
            }
        }
    };
    permutes(nums, state, res, selected);
    return res;
};
const nums46 = [1, 1, 3];
const permute46Rs = permuteUnique(nums46);
console.log(permute46Rs);

//47 39. 组合总和
var combinationSum = function (candidates, target) {
    const res = [],
        state = [];
    const combinationSums = function (candidates, state, res, start, target) {
        if (target === 0) {
            res.push([...state]);
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            if (target - candidates[i] < 0) {
                continue;
            }
            // console.log(duplicated.has[nums[i]]);
            state.push(candidates[i]);

            combinationSums(candidates, state, res, i, target - candidates[i]);

            //回溯
            state.pop();
        }
    };
    combinationSums(candidates, state, res, 0, target);
    return res;
};

const candidates47 = [8, 7, 4, 3],
    target47 = 11;
const combinationSum47Rs = combinationSum(candidates47, target47);
console.log('No.47: 39. 组合总和');
console.log(combinationSum47Rs);

//48 40. 组合总和 II
var combinationSum2 = function (candidates, target) {
    const res = [],
        state = [],
        selected = Array(candidates.length).fill(false);
    candidates.sort((a, b) => a - b);
    const combinationSum2s = function (candidates, state, res, start, target) {
        if (target === 0) {
            res.push([...state]);
            return;
        }
        for (let i = start; i < candidates.length; i++) {
            if (target - candidates[i] < 0) {
                break;
            }
            if (i > start && candidates[i] === candidates[i - 1]) {
                continue;
            }

            state.push(candidates[i]);
            //同一个数不重复取
            //selected[i] = true;
            combinationSum2s(
                candidates,
                state,
                res,
                i + 1,
                target - candidates[i]
            );

            //回溯
            state.pop();
            //selected[i] = false;
        }
    };
    combinationSum2s(candidates, state, res, 0, target);
    return res;
};

const candidates48 = [1, 2, 7, 6, 1], //11267
    //candidates48 = [10, 1, 2, 7, 6, 1, 5],
    target48 = 9;
const combinationSum2s48Rs = combinationSum2(candidates48, target48);
console.log('No.48: 40. 组合总和II');
console.log(combinationSum2s48Rs);
