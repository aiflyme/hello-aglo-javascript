//Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

//43 104 二叉树的最大深度
var maxDepth = function (root) {
    //method 1
    // if (root === null) return 0;
    // else {
    //     return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
    // }

    //method 2
    if (!root) return 0;

    let queue = [],
        res = 0;
    queue.push(root);

    while (queue.length !== 0) {
        const tmp = [];
        queue.forEach((e) => {
            if (e.left) tmp.push(e.left);
            if (e.right) tmp.push(e.right);
        });
        queue = tmp;
        res += 1;
    }
    return res;
};

const t0_43 = new TreeNode(3);
const t1_43 = new TreeNode(9);
const t2_43 = new TreeNode(20);
const t3_43 = new TreeNode(15);
const t4_43 = new TreeNode(7);

t0_43.left = t1_43;
t0_43.right = t2_43;
t2_43.left = t3_43;
t2_43.right = t4_43;

// const root = [3, 9, 20, null, null, 15, 7];
const maxDepths = maxDepth(t0_43);
console.log(maxDepths);
//44 113. 路径总和 II

const t0_44 = new TreeNode(5);
const t1_44 = new TreeNode(4);
const t2_44 = new TreeNode(8);
const t3_44 = new TreeNode(11);
const t4_44 = new TreeNode(13);
const t5_44 = new TreeNode(4);
const t6_44 = new TreeNode(7);
const t7_44 = new TreeNode(2);
const t8_44 = new TreeNode(5);
const t9_44 = new TreeNode(1);

t0_44.left = t1_44;
t0_44.right = t2_44;
t1_44.left = t3_44;
t2_44.left = t4_44;
t2_44.right = t5_44;
t3_44.left = t6_44;
t3_44.right = t7_44;
t5_44.left = t8_44;
t5_44.right = t9_44;
const root = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1],
    targetSum = 22;
var pathSum = function (root, targetSum) {
    if (root === null) return root;
    const res = [],
        tmp = [],
        state = [];
    let sum = 0;
    tmp.push(root);
    const pathSums = function (root, targetSum, res, state, sum) {
        if (root === null) return root;
        state.push(root.val);
        sum += root.val;
        if (targetSum === sum && root.left === null && root.right === null) {
            res.push([...state]);
        }

        pathSums(root.left, targetSum, res, state, sum);
        pathSums(root.right, targetSum, res, state, sum);
        state.pop();
    };
    pathSums(root, targetSum, res, state, sum);
    return res;
};

const pathSumRS = pathSum(t0_44, targetSum);
console.log(pathSumRS);
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

//49 79. 单词搜索
var exist = function (board, word) {
    const m = board.length,
        n = board[0].length,
        wordArr = word.split('');
    let res = '';

    const exists = (board, wordArr, i, j, k) => {
        if (
            i >= board.length ||
            i < 0 ||
            j >= board[0].length ||
            j < 0 ||
            board[i][j] !== word[k]
        ) {
            return false;
        }
        if (k === word.length - 1) return true;
        board[i][j] = '\0';

        const res =
            exists(board, wordArr, i + 1, j, k + 1) ||
            exists(board, wordArr, i - 1, j, k + 1) ||
            exists(board, wordArr, i, j + 1, k + 1) ||
            exists(board, wordArr, i, j - 1, k + 1);
        board[i][j] = wordArr[k];
        return res;
    };

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (exists(board, wordArr, i, j, 0)) return true;
        }
    }
    return false;
};

const board = [
        ['A', 'A', 'C', 'E'],
        ['S', 'F', 'C', 'S'],
        ['A', 'D', 'E', 'E'],
    ],
    word = 'AA'; //'ABCCED';

const existRS = exist(board, word);
console.log(existRS);
// console.log(word.length, word.substring(0, 4).length);
const arr = ['A', 'B', 'C', 'E'];
// while (arr) {
//     console.log(arr);
// }
let words = 'abcdef';
console.log(words.substring(0, words.length - 1));
console.log(words - 1);
console.log(words[3]);
