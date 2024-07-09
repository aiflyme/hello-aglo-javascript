const { arrToTree } = require('../modules/TreeNode');
const { printTree } = require('../modules/PrintUtil');

//判断是否为解
function isSolution(state) {
    return state && state[state.length - 1]?.val === 7;
}

//记录解
function recordSolution(state, res) {
    res.push([...state]);
    //return;
}

//遍历所有选择
function isValid(state, choice) {
    return choice !== null; //
}

//尝试 做出选择，更新状态
function makeChoice(state, choice) {
    state.push(choice);
}

//回退 撤消选择，恢复到之前的状态
function undoChoice(state) {
    state.pop();
}

//回溯
function backtrack(state, choices, res) {
    if (isSolution(state)) {
        recordSolution(state, res);
    }

    for (const choice of choices) {
        //判断是否合法
        if (isValid(state, choice)) {
            //做出选择
            makeChoice(state, choice);
            backtrack(state, [choice.left, choice.right], res);

            //回撤
            undoChoice(state);
        }
    }
}

// Driver Code
const root = arrToTree([1, 7, 3, 4, 5, 6, 7]);
console.log('\n初始化二叉树');
printTree(root);

// 回溯算法
const res = [];
backtrack([], [root], res);

console.log('\n输出所有根节点到节点 7 的路径，要求路径中不包含值为 3 的节点');
res.forEach((path) => {
    console.log(path.map((node) => node.val));
});
